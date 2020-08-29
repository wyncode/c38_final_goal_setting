import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Milestone from './pages/Milestone';
import Home from './pages/Home';
import AddReflection from './pages/AddReflection';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/addreflection" component={AddReflection} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/milestone" component={Milestone} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
