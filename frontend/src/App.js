import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import Sms from "./components/Sms";
import OpenTok from "./components/OpenTok";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/sms">
          <Sms />
        </Route>
        <Route path="/open-tok">
          <OpenTok />
        </Route>
      </Switch>
    </>
  );
}

export default App;
