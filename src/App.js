import "./App.css";
import Headers from "./component/header/Headers";
import { Switch, Redirect, Route } from "react-router-dom";
import { Overview } from "./Container/Overview";
import { NewDataForm } from "./component/Form/NewDataForm";

function App() {
  return (
    <>
      <Headers />
      <Switch>
        <Route path={"/overview"} exact component={Overview} />
        <Route path={"/newData"} exact component={NewDataForm} />
        <Redirect from="/*" to="/overview" />
      </Switch>
    </>
  );
}

export default App;
