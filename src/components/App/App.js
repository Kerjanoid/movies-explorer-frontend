import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Profile from "../Profile/Profile"
import MoviesApi from "../../utils/MoviesApi"

function App() {
  const loggedIn = true; /* изменить состояние true/false, для изменения внешнего вида header */
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [movies, setMovies] = useState([]);
  const [screenWidth, setScreenWidth] = useState( window.innerWidth );

  const handleSideBarState = () => {
    setIsSideBarOpened(!isSideBarOpened)
  }

  const handleResize = () => {
    setScreenWidth(
      window.innerWidth,
    );
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    MoviesApi.getInitialMovies()
      .then(moviesData => {
        setMovies(moviesData)
    })
      .catch(err => console.log(err))}
  , [])

  return (
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            handleSideBarState={handleSideBarState}
            screenWidth={screenWidth} />
        </Route>
        <Route exact path="/movies">
          <Movies loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            handleSideBarState={handleSideBarState}
            movies={movies}
            screenWidth={screenWidth} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            movies={movies}
            handleSideBarState={handleSideBarState}
            screenWidth={screenWidth} />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile loggedIn={loggedIn}
            isSideBarOpened={isSideBarOpened}
            handleSideBarState={handleSideBarState}
            screenWidth={screenWidth} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;
