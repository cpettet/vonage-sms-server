import { Route, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/sms"></Route>
        <Route path="/open-tok"></Route>
      </Switch>
    </>
  );
}

export default App;
