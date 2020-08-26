import React, { useEffect, useContext } from 'react';
import { Image, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { useHistory } from 'react-router-dom';

const Dashboard = ({ history }) => {
  //const history = useHistory();

  const {
    setStories,
    setFilteredStories,
    search,
    loading,
    currentUser,
    stories,
    currentChapter,
    setCurrentChapter,
    setCurrentStory
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

  const getCurrentChapter = (chapterArr) => {
    const moment = extendMoment(Moment);

    const today = moment()._d;
    console.log(today);
    let rangeStart = 0;
    let rangeEnd = 1;

    while (rangeEnd < chapterArr.length) {
      let range = moment.range(
        chapterArr[rangeStart].dueDate,
        chapterArr[rangeEnd].dueDate
      );

      if (range.contains(today)) {
        return chapterArr[rangeStart];
      }

      rangeStart++;
      rangeEnd++;
    }
    return chapterArr[0];
  };

  const getCatagoryStyle = () => {};

  const goToChapter = (chaptersArr, parentStory, currentIndex) => {
    setCurrentChapter({
      chapter: getCurrentChapter(chaptersArr),
      currentIndex: currentIndex
    });
    setCurrentStory(parentStory);
    history.push('/chapter');
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Image
        style={{ width: '150px' }}
        src={currentUser?.avatar || '../resources/images/default_avator.png'}
        roundedCircle
        clasname="centered"
      />
      <h2>{currentUser?.name}</h2>
      <Table>
        <tbody>
          {stories?.map((story, i) => {
            return (
              <tr key={i}>
                <td>{story.description}</td>
                <td>
                  <Button
                    className="btn-default btn-block"
                    onClick={() => goToChapter(story.chapters, story, i)}
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
