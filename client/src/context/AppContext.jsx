import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // global state that can be used in any component in our application
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [search, setSearch] = useState('');
  const [currentFilter, setCurrentFilter] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [currentStory, setCurrentStory] = useState(null);
  const user = sessionStorage.getItem('user');

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
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        stories,
        setStories,
        filteredStories,
        setFilteredStories,
        search,
        setSearch,
        currentFilter,
        setCurrentFilter,
        currentChapter,
        setCurrentChapter,
        currentStory,
        setCurrentStory
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
