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
import Reflection from './pages/Reflection';
import EducationInfo from './components/goalsInfo/EducationInfo';
import FinanceInfo from './components/goalsInfo/FinanceInfo';
import FitnessInfo from './components/goalsInfo/FitnessInfo';
import HealthInfo from './components/goalsInfo/HealthInfo';
import ProfessionalInfo from './components/goalsInfo/ProfessionalInfo';
import SocialInfo from './components/goalsInfo/SocialInfo';
import GoalsHome from './components/GoalsHome';
import EditGoal from './pages/EditGoal';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import UpdatePassword from './pages/UpdatePassword';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addreflection" component={AddReflection} />
          <Route exact path="/educationinfo" component={EducationInfo} />
          <Route exact path="/financeinfo" component={FinanceInfo} />
          <Route exact path="/fitnessinfo" component={FitnessInfo} />
          <Route exact path="/healthinfo" component={HealthInfo} />
          <Route exact path="/professionalinfo" component={ProfessionalInfo} />
          <Route exact path="/socialinfo" component={SocialInfo} />
          <Route exact path="/goalshome" component={GoalsHome} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <PrivateRoute exact path="/wizard" component={Wizard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/milestone" component={Milestone} />
          <PrivateRoute exact path="/reflection" component={Reflection} />
          <PrivateRoute exact path="/addreflection" component={AddReflection} />
          <PrivateRoute exact path="/editgoal" component={EditGoal} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
