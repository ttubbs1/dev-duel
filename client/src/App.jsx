import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Inspect from "./components/Screens/Inspect";
import Home from "./components/Screens/Home";
import Duel from "./components/Screens/Duel";

function App() {

 
 // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser()
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path='/inspect' component={Inspect} />
        <Route path ='/duel' component={Duel} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
