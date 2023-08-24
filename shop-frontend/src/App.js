import "./App.css";
// import { Routes, Route, useNavigate, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Order from "./components/order";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Button variant="primary">View details</Button>
          <Link className="nav-link" to={"/Order-details"}>
            Login
          </Link>
        </header>

        <Routes>
          <Route path="/Order-details" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
