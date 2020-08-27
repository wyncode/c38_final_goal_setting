import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Chapter from './pages/Chapter';
import Home from './pages/Home';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/chapter" component={Chapter} />
      </Router>
    </AppContextProvider>
  );
};

export default App;
