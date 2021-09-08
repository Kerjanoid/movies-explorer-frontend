import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from "../Register/Register"
import NotFound from "../NotFound/NotFound";

function App() {
  const loggedIn = false; /* изменить состояние true/false, для изменения внешнего вида header */
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
        <Route path="/movies">
          <Movies loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route path="/signup">
          <Register loggedIn={loggedIn} />
        </Route>
        {/* <Route path="/profile">
          </Route>
           */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;
