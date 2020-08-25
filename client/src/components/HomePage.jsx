import React from 'react';
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
            <h4>How are people achieving?</h4>
          </div>
          <div className="pics">
            <div>
              <Image className="pic" src={require('./images/climb.jpg')} />
            </div>
            <div>
              <Image className="pic" src={require('./images/marathon.jpg')} />
            </div>
            <div>
              <Image className="pic" src={require('./images/graduate.jpg')} />
            </div>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron fluid>
        <div className="goals">
          <h3>Goals</h3>
          <div className="goal-btns">
            <button>Fitness</button>
            <button>Education</button>
            <button>Finance</button>
            <button>Professional</button>
            <button>Social</button>
            <button>Health</button>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron fluid>
        <div className="testimonial">
          <h3>Testimonials</h3>
          <div className="testimonial-box">
            <div className="t-box">
              <p>
                Nick Miller's Fitness Goals: <br />
                <em>My journey to lose 65 pounds</em>
              </p>
            </div>
            <div className="t-box">
              <p>
                Nick Miller's Fitness Goals: <br />
                <em>My journey to lose 65 pounds</em>
              </p>
            </div>
            <div className="t-box">
              <p>
                Nick Miller's Fitness Goals: <br />
                <em>My journey to lose 65 pounds</em>
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};
export default HomePage;
