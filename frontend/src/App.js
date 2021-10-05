import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/sms"></Route>
        <Route path="/open-tok"></Route>
      </Switch>
    </>
  );
}

export default App;
