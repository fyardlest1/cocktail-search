import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import Navbar
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cocktail/:id' component={SingleCocktail} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  )
}
