import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import Sms from "./components/Sms";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/sms">
          <Sms />
        </Route>
        <Route path="/open-tok"></Route>
      </Switch>
    </>
  );
}

export default App;
