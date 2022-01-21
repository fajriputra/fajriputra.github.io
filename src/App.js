import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Detail from "pages/Detail";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:name" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
