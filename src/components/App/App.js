import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrenUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"

// TODO:
// 1. Запилить состояния радиокнопки
// 2. Запилить фильтрацию по duration радиокнопкой
// 3. Запилить работу с компонентом SavedMovies
// 4. Запилить прелоадер при поиске фильмов
// 5. Запилить ошибку поиска, если ничего не найдено

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedFoundMovies, setSavedFoundMovies] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentUser, setCurrentUser] = useState({});
  const [waiting, setWaiting] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
    initialMoviesCheck();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setTimeout(() => {
      handleResize();
    }, 1000));
  }, []);

  useEffect(() => {
    if (loggedIn === true) {
      MainApi.getUserInformation()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(err => console.log(err))}
  }, [loggedIn]);

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.getToken(token)
        .then(() => {
          setLoggedIn(true);
        })
        .catch(err => console.log(err))
    } else {setLoggedIn(false)}
  };

  const initialMoviesCheck = () => {
    const initialMovies = JSON.parse(localStorage.getItem("initialMovies"));
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    if (initialMovies) {
      setMovies(initialMovies);
      const initialFoundMovies = JSON.parse(localStorage.getItem("foundMovies"));
      setFoundMovies(initialFoundMovies);
        if (savedMovies) {
          setSavedMovies(savedMovies);
        } else {setSavedMovies([])}
    }
  };

  const handleRegister = (name, email, password) => {
    setWaiting("Регистрация...")
    setDisableButton(true)
    MainApi.register(name, email, password)
      .then(res => {
        if (res) {
          setTimeout(() => {
          handleLogin(email, password);
        }, 500)}
        })
      .catch(err => {
        console.log(err)})
      .finally(() => {
        setWaiting(null);
        setDisableButton(false);
      })
  };

  const handleLogin = (email, password) => {
    setWaiting("Вход...")
    setDisableButton(true)
    MainApi.login(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        setWaiting(null);
        setDisableButton(false);
      })
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push("/");
    setCurrentUser({});
  };

  const handleChangeСheckbox = () => {
    setChecked(!checked);
  };

  const handleUpdateUser = (name, email) => {
    setWaiting("Сохранение...");
    setDisableButton(true);
    MainApi.editProfile(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setWaiting(null);
        setDisableButton(false);
      })
  };

  const handleSideBarState = () => {
    setIsSideBarOpened(!isSideBarOpened)
  };

  const handleResize = () => {
    setScreenWidth(
      window.innerWidth,
    )
  };

  const searchMovies = (searchText) => {
    const initialMovies = JSON.parse(localStorage.getItem("initialMovies"))
    setIsLoading(true)
    if (!initialMovies) {
      MoviesApi.getMovies()
        .then(moviesData => {
          if (movies.length === 0) {
            const foundResult = moviesData.filter(movie => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
            if (checked) {
              const foundShortResult = foundResult.filter(movie => movie.duration <= 40);
              setFoundMovies(foundShortResult);
              setMovies(moviesData);
              localStorage.setItem("initialMovies", JSON.stringify(moviesData));
              localStorage.setItem("foundMovies", JSON.stringify(foundShortResult));
            } else {
              const foundNotShortResult = foundResult.filter(movie => movie.duration > 40);
              setFoundMovies(foundNotShortResult);
              setMovies(moviesData);
              localStorage.setItem("initialMovies", JSON.stringify(moviesData));
              localStorage.setItem("foundMovies", JSON.stringify(foundNotShortResult));
            }
          }
        })
        .catch(err => console.log(err))
    } else {
      const foundResult = initialMovies.filter(movie => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      if (checked) {
        const foundShortResult = foundResult.filter(movie => movie.duration <= 40);
        setFoundMovies(foundShortResult);
        localStorage.setItem("foundMovies", JSON.stringify(foundShortResult));
      } else {
        const foundNotShortResult = foundResult.filter(movie => movie.duration > 40);
        setFoundMovies(foundNotShortResult);
        localStorage.setItem("foundMovies", JSON.stringify(foundNotShortResult));
      }
    }
    setTimeout(() => {setIsLoading(false)}, 2000);
  };

  const saveMovies = (movie) => {
    MainApi.saveMovies(movie)
      .then(res => {
        const movies = [...savedMovies, res];
        localStorage.setItem("savedMovies", JSON.stringify(movies));
        setSavedMovies(prev => [...prev, res]);
      })
      .catch(err => console.log(err))
  };

  const filterMoviesById = (collection, id) => {
    return collection.filter(item => { return item._id !== id });
  };

  const deleteSavedMoivies = (id) => {
    MainApi.deleteSavedMovies(id)
      .then(() => {
        const movies = filterMoviesById(savedMovies, id);
        setSavedMovies(movies);
        localStorage.setItem("savedMovies", JSON.stringify(movies));
      })
      .catch(err => console.log(err))
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            handleSideBarState={handleSideBarState}
            screenWidth={screenWidth} />
        </Route>
        <ProtectedRoute exact path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState}
          screenWidth={screenWidth}
          movies={foundMovies}
          searchMovies={searchMovies}
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked}
          isLoading={isLoading}
          saveMovies={saveMovies}
          deleteSavedMoivies={deleteSavedMoivies}
          savedMovies={savedMovies} />
        <ProtectedRoute exact path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          isSideBarOpened={isSideBarOpened}
          movies={savedMovies}
          handleSideBarState={handleSideBarState}
          screenWidth={screenWidth}
          searchMovies={searchMovies}
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked}
          isLoading={isLoading}
          deleteSavedMoivies={deleteSavedMoivies}
          savedMovies={savedMovies} />
        <ProtectedRoute exact path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState}
          screenWidth={screenWidth}
          handleUpdateUser={handleUpdateUser}
          waiting={waiting}
          disableButton={disableButton}
          handleSignOut={handleSignOut} />
        <Route exact path="/signup">
          <Register
            loggedIn={loggedIn}
            handleRegister={handleRegister}
            waiting={waiting}
            disableButton={disableButton} />
        </Route>
        <Route exact path="/signin">
          <Login
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            waiting={waiting}
            disableButton={disableButton} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
