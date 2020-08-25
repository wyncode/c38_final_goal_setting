import React, { useEffect, useContext } from 'react';
import { Image, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
const Dashboard = () => {
  const {
    setStories,
    setFilteredStories,
    search,
    loading,
    filteredStories,
    currentUser,
    stories
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/stories?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setStories(response.data);
        setFilteredStories(response.data);
      })
      .catch((error) => console.log(error));
    // the items in the dependency array will trigger the useEffect when their values are changed
  }, [setStories, setFilteredStories, search, loading]);

  const getCurrentChapter = () => {};

  return (
    <Container>
      <Image src={currentUser?.avator} rounded />

      <Table>
        <tbody>
          {stories?.map((story) => {
            return (
              <tr>
                <td>{story.description}</td>
                <td>
                  <Button>do something</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button> Write a story</Button>
    </Container>
  );
};

export default Dashboard;
