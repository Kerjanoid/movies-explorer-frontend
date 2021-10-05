import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Profile from "../Profile/Profile"

function App() {
  const loggedIn = true; /* изменить состояние true/false, для изменения внешнего вида header */
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  const handleSideBarState = () => {
    setIsSideBarOpened(!isSideBarOpened)
  }

  return (
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route exact path="/movies">
          <Movies loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
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
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;
