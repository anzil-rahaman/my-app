import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import User from './components/screens/includes/User';
import Users from './components/screens/includes/Users';
import Nav from './components/screens/Nav';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </>
    </Router>
    
  );
}

export default App;
