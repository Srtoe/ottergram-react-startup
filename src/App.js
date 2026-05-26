import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <header className="site-header">
          <div className="brand-block">
            <span className="brand-icon" aria-hidden="true">OT</span>
            <div>
              <p className="eyebrow">Week 2 React Project</p>
              <h1>Employee Management System</h1>
            </div>
          </div>
          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/employee-form" activeClassName="active">Employee Form</NavLink>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/employee-form" component={EmployeeForm} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;