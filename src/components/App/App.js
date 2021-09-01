import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../Main/Main";

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
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
