import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Chalenge APP</h2>
        <div>
          <Route exact path="/Create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/Read" component={Read} />
        </div>
        <Route path="/Update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
