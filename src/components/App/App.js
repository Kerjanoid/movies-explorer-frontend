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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [isOnlyCheckedSearch, setIsOnlyCheckedSearch] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [savedKeyWord, setSavedKeyWord] = useState("");
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
      .catch(err => console.log(err));
      MainApi.getMovies()
      .then(moviesData => {
        setSavedMovies(moviesData);
        setSavedMoviesId(moviesData.map((movie) => movie.movieId));
      })
      .catch(err => console.log(err));}
      setIsNothingFound(false);
  }, [loggedIn]);

  useEffect(() => {
    if (savedKeyWord) {
      handleSearchSavedMovies(savedKeyWord);
    }
  }, [savedMovies]);

  useEffect(() => {
    if (savedMovies.length || foundSavedMovies.length) {
      handleSearchSavedMovies(savedKeyWord);
    }
    if (localStorage.getItem("foundMovies")) {
      const foundMovies = JSON.parse(localStorage.getItem("foundMovies"))
      foundShort(foundMovies);
    }
  }, [checked]);

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
    const initialMovies = localStorage.getItem("foundMovies");
    initialMovies ? setMovies(JSON.parse(initialMovies)) : setMovies([])
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

  const foundShort = (moviesArray) => {
    if (checked) {
      return moviesArray.filter(movie => movie.duration <= 40);
    } else {
      return moviesArray;
    }
  }

  const searchMovies = (moviesArray, searchText) => {
    if (moviesArray.length) {
      const foundResult = moviesArray.filter(movie => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      if (moviesArray[0].owner) {
        foundShort(foundResult)
      } else {
        return moviesArray.filter(movie => movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      }
    }
  }

  const handleSearchMovies = async (searchText) => {
    setIsLoading(true);
    setIsNothingFound(false);
    try {
      let movies = JSON.parse(localStorage.getItem("movies"));
        if (!movies) {
          const moviesData = await MoviesApi.getMovies();
          localStorage.setItem("movies", JSON.stringify(moviesData));
          movies = JSON.parse(localStorage.getItem("movies"));
        }
      const foundMovies = searchMovies(movies, searchText);
      localStorage.setItem("foundMovies", JSON.stringify(foundMovies));}
    catch (err) {console.log(err);}
    setTimeout(() => {setIsLoading(false)}, 2000);
  };

  const handleSearchSavedMovies = (searchText) => {
    setIsOnlyCheckedSearch(false);
    if (!searchText) {
      setIsOnlyCheckedSearch(true);
    }
    setSavedKeyWord(searchText);
    const movies = searchMovies(savedMovies,searchText );
    setFoundSavedMovies(movies);
  };

  const handleSaveMovie = (movie) => {
    MainApi.saveMovies(movie)
      .then(res => {
        setSavedMoviesId([...savedMoviesId, movie.id]);
        setSavedMovies([...savedMovies, res]);
      })
      .catch(err => console.log(err))
  };

  const handleDeleteMovie = (movie) => {
    let movieId = savedMovies.filter((item) => item.movieId === movie.id)[0];
    if (movieId) {
      movieId = movieId._id;
    }
    MainApi.deleteSavedMovies(movie.owner ? movie._id : movieId)
      .then((res) => {
        setSavedMovies(savedMovies.filter((item) => item._id !== res._id));
        setSavedMoviesId(savedMoviesId.filter((id) => id !== res.movieId));
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
          movies={movies}
          handleSearchMovies={handleSearchMovies}
          handleChangeСheckbox={handleChangeСheckbox}
          savedMoviesId={savedMoviesId}
          checked={checked}
          isLoading={isLoading}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies} />
        <ProtectedRoute exact path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          isSideBarOpened={isSideBarOpened}
          movies={
            savedKeyWord || isOnlyCheckedSearch
              ? foundSavedMovies.length
                ? foundSavedMovies
                : "NotFound"
              : savedMovies
          }
          handleSideBarState={handleSideBarState}
          screenWidth={screenWidth}
          handleChangeСheckbox={handleChangeСheckbox}
          checked={checked}
          isLoading={isLoading}
          handleDeleteMovie={handleDeleteMovie} />
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
