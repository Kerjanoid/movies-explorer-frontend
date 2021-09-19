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
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [movies, setMovies] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentUser, setCurrentUser] = useState({});
  const [waiting, setWaiting] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const history = useHistory();

  useEffect(() => {
    tokenCheck()
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setTimeout(() => {
      handleResize()
    }, 1000));
  }, []);

  useEffect(() => {
    MoviesApi.getMovies()
      .then(moviesData => {
        setMovies(moviesData)
    })
      .catch(err => console.log(err))}
  , []);

  useEffect(() => {
    if (loggedIn === true) {
      MainApi.getUserInformation()
      .then(userData => {
        setCurrentUser(userData)
      })
      .catch(err => console.log(err))}
  }, [loggedIn]);

  const tokenCheck = () => {
    const token = localStorage.getItem('token')
    if (token) {
      MainApi.getToken(token)
        .then(res => {
          setLoggedIn(true)
          history.push('/')
        })
        .catch(err => console.log(err))
    }
  };

  const handleRegister = (name, email, password) => {
    setWaiting("Регистрация...")
    setDisableButton(true)
    MainApi.register(name, email, password)
      .then(res => {
        if (res) {
          alert("Зарегался")}
        })
      .catch(err => {
        alert("Не зарегался")
        console.log(err)})
      .finally(() => {
        setWaiting(null)
        setDisableButton(false)
      })
  };

  const handleLogin = (email, password) => {
    setWaiting("Вход...")
    setDisableButton(true)
    MainApi.login(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token)
          setLoggedIn(true)
          history.push('/')
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        setWaiting(null)
        setDisableButton(false)
      })
  };

  const handleSideBarState = () => {
    setIsSideBarOpened(!isSideBarOpened)
  }

  const handleResize = () => {
    setScreenWidth(
      window.innerWidth,
    );
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
        <ProtectedRoute exact path="/movies">
          <Movies loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            handleSideBarState={handleSideBarState}
            movies={movies}
            screenWidth={screenWidth} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/saved-movies">
          <SavedMovies loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            movies={movies}
            handleSideBarState={handleSideBarState}
            screenWidth={screenWidth} />
        </ProtectedRoute>
        <Route exact path="/signup">
          <Register
            handleRegister={handleRegister}
            waiting={waiting}
            disableButton={disableButton} />
        </Route>
        <Route exact path="/signin">
          <Login
            handleLogin={handleLogin}
            waiting={waiting}
            disableButton={disableButton} />
        </Route>
        <ProtectedRoute exact path="/profile">
          <Profile loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            handleSideBarState={handleSideBarState}
            screenWidth={screenWidth} />
        </ProtectedRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
