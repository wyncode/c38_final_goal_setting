import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { GrBook } from 'react-icons/gr';
import { GrTrophy } from 'react-icons/gr';
import { RiFileSettingsLine } from 'react-icons/ri';

const HomePage = () => {
  return (
    <Container>
      <Jumbotron fluid>
        <div className="home">
          <h1>Create your</h1>
          <h1>Best Life</h1>
          <br />
          <h2>Commit, Reflect & Conquer</h2>
          <br />
          <p className="quote">
            The meaning of life is just to be alive. It is so plain and so
            obvious and so simple. And yet, everybody rushes around in a great
            panic as if it were necessary to achieve something beyond
            themselves.
          </p>
          <br />
          <Button className="home-btn" variant="secondary" size="lg">
            Create a Goal
          </Button>
        </div>
      </Jumbotron>
      <Jumbotron fluid>
        <div className="home-icon">
          <div>
            <GrBook size="100px" color="black" />
          </div>
          <div>
            <p>
              The journey towards achieving your goals is your unique story ans
              we're here to support you.
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron fluid>
        <div className="home-icon">
          <div>
            <RiFileSettingsLine size="100px" color="black" />
          </div>
          <div>
            <p>
              Reflect, refine ans share your story with others in your
              community.
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron fluid>
        <div className="home-icon">
          <div>
            <GrTrophy className="icon" size="100px" color="black" />
          </div>
          <div>
            <p>
              Celebrate accomplishments with badges, rewards ans save your story
              in the library for others to see!
            </p>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron>
        <div className="home-pics">
          <div>
            <h3>How are people achieving?</h3>
            <p>Get a glimpse of how our users are achieving</p>
          </div>
          <div className="pics">
            <div>
              <Image className="pic" src={require('./images/marathon.jpg')} />
            </div>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron fluid>
        <div className="stats">
          <div>
            <h3>Statistics</h3>
            <p>
              80% of the population never set goals.
              <br /> Out of the 20% who do, only 30% achieve their goal.
            </p>
            <div className="pie">
              <div className="piechart"></div>
              <div className="percentage">
                <div className="p-blue"></div>
                <div>
                  <p>% of population who do not set goals</p>
                </div>

                <div className="p-pink"></div>
                <div>
                  <p>% of population that sets goals</p>
                </div>
                <div className="p-white"></div>
                <div>
                  <p>% of population that achieve their goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};
export default HomePage;
