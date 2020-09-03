import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { VscBook } from 'react-icons/vsc';
import { VscVerified } from 'react-icons/vsc';
import { VscChecklist } from 'react-icons/vsc';

const HomePage = () => {
  return (
    <Container>
      <Jumbotron className="home">
        <div>
          <h1>Create your</h1>
          <h1>Best Life</h1>
          <br />
          <h5>Commit, Reflect & Conquer</h5>
          <br />
          <p className="quote">
            Ready to crate a goal?
            <br />
            Tap the button below to
            <br />
            get started
          </p>
          <br />
          <button className="home-btn">
            <AnchorLink href="#createAGoal">
              <p>Create a Goal</p>
            </AnchorLink>
          </button>
        </div>
      </Jumbotron>

      <Jumbotron className="home-1">
        <h3>
          <section id="howItWorks">How it Works</section>
        </h3>
        <p>
          We offer a wide range of features,
          <br />
          let's hightlight a few of them for you.
        </p>
        <div className="home-icon">
          <div>
            <VscBook className="icon" size="75px" color="#8546D4" />
          </div>
          <div>
            <p>
              The journey towards achieving your goals is your unique story ans
              we're here to support you.
            </p>
          </div>
        </div>

        <div className="home-icon">
          <div>
            <VscChecklist className="icon" size="75px" color="#8546D4" />
          </div>
          <div>
            <p>
              Reflect, refine ans share your story with others in your
              community.
            </p>
          </div>
        </div>
        <div className="home-icon">
          <div>
            <VscVerified className="icon" size="75px" color="#8546D4" />
          </div>
          <div>
            <p>
              Celebrate accomplishments with badges, rewards ans save your story
              in the library for others to see!
            </p>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron className="home-2">
        <div className="stats">
          <div>
            <h3>Goal Trends</h3>
            <p>
              80% of the population never set goals.
              <br /> Out of the 20% who do, only 30% achieve their goal.
            </p>
            <div className="pie">
              <div className="piechart"></div>
            </div>
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
      </Jumbotron>
    </Container>
  );
};
export default HomePage;
