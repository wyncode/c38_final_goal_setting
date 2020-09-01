import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // global state that can be used in any component in our application
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [goals, setGoals] = useState([]);
  const [filteredGoals, setFilteredGoals] = useState([]);
  const [search, setSearch] = useState('');
  const [currentFilter, setCurrentFilter] = useState(null);
  const [currentMilestone, setCurrentMilestone] = useState(null);
  const [currentGoal, setCurrentGoal] = useState(null);
  const user = sessionStorage.getItem('user');
  const [formData, setFormData] = useState({});
  const [reloadTasks, setReloadTasks] = useState(true);

  const updateDailyTask = (goalId, taskUpdate) => {
    axios
      .patch(`/api/goals/${goalId}`, taskUpdate, {
        withCredentials: true
      })
      .then((resp) => {
        //console.log(reloadTask, 'reload before set');
        setReloadTasks(true);
      })
      .catch((error) => console.log(error.toString()));
  };

  useEffect(() => {
    //incase the user refreshes & context is cleared
    if (user && !currentUser) {
      axios
        .get('/api/users/me', { withCredentials: true })
        .then((res) => setCurrentUser(res.data))
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        goals,
        setGoals,
        filteredGoals,
        setFilteredGoals,
        search,
        setSearch,
        currentFilter,
        setCurrentFilter,
        currentMilestone,
        setCurrentMilestone,
        currentGoal,
        setCurrentGoal,
        reloadTasks,
        setReloadTasks,
        updateDailyTask
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
