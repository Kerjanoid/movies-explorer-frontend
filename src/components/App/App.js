import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";

function App() {
  const loggedIn = true; /* изменить состояние true/false, для изменения внешнего вида header */
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  const handleSideBarState = () => {
    setIsSideBarOpened(true)
  }

  return (
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route path="/movies">
          <Main loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        <Route path="/saved-movies">
          <Main loggedIn={loggedIn}
          isSideBarOpened={isSideBarOpened}
          handleSideBarState={handleSideBarState} />
        </Route>
        {/* <Route path="/profile">

          </Route>
          <Route path="/movies">

          </Route>
          <Route path="/saved-movies">

          </Route> */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;
