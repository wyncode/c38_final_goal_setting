import React, { useEffect, useContext } from 'react';
import { Image, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { getCurrentChapterObj } from '../utilities/index';

const Dashboard = ({ history }) => {
  const {
    setStories,
    loading,
    currentUser,
    stories,
    setCurrentChapter,
    setCurrentStory
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/stories?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => console.log(error));
  }, [setStories, loading]);

  //const getCatagoryStyle = () => {};

  const goToChapter = (chaptersArr, parentStory) => {
    setCurrentChapter(getCurrentChapterObj(chaptersArr));
    setCurrentStory(parentStory);
    history.push('/chapter');
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Image
        style={{ width: '150px' }}
        src={currentUser?.avatar}
        roundedCircle
        clasname="centered"
      />
      <h2>{currentUser?.name}</h2>
      <Table>
        <tbody>
          {stories?.map((story) => {
            return (
              <tr key={story._id}>
                <td>{story.description}</td>
                <td>
                  <Button
                    className="btn-default btn-block"
                    onClick={() => goToChapter(story.chapters, story)}
                  >
                    Go to chapter
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button className="btn btn-default btn-block"> Write a story</Button>
    </Container>
  );
};

export default Dashboard;
