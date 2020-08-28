import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Chapter from './pages/Chapter';
import Home from './pages/Home';
import Wizard from './pages/Wizard';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/wizard" component={Wizard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/chapter" component={Chapter} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
