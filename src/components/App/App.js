import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";

function App() {
  const loggedIn = true; /* изменить состояние true/false, для изменения внешнего вида header */

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <Route path="/movies">
          <Main loggedIn={loggedIn} />
        </Route>
        <Route path="/saved-movies">
          <Main loggedIn={loggedIn} />
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
    </div>
  );
}

export default App;
