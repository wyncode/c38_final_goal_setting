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
import Wizard from './pages/Wizard';
import EducationInfo from './components/goalsInfo/EducationInfo';
import FinanceInfo from './components/goalsInfo/FinanceInfo';
import FitnessInfo from './components/goalsInfo/FitnessInfo';
import HealthInfo from './components/goalsInfo/HealthInfo';
import ProfessionalInfo from './components/goalsInfo/ProfessionalInfo';
import SocialInfo from './components/goalsInfo/SocialInfo';
import GoalsHome from './components/GoalsHome';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/wizard" component={Wizard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/addreflection" component={AddReflection} />
          <Route exact path="/addreflection" component={AddReflection} />
          <Route exact path="/educationinfo" component={EducationInfo} />
          <Route exact path="/financeinfo" component={FinanceInfo} />
          <Route exact path="/fitnessinfo" component={FitnessInfo} />
          <Route exact path="/healthinfo" component={HealthInfo} />
          <Route exact path="/professionalinfo" component={ProfessionalInfo} />
          <Route exact path="/socialinfo" component={SocialInfo} />
          <Route exact path="/goalshome" component={GoalsHome} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/milestone" component={Milestone} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
