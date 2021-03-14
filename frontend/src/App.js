import SignUp from "./comp/SignUp/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./comp/Home/Home";
import Login from "./comp/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
