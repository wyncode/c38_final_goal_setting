import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Router>
    </AppContextProvider>
  );
};

export default App;
