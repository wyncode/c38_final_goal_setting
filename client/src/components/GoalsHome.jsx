import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const GoalsHome = () => {
  return (
    <Container>
      <Jumbotron className="home-1" id="createAGoal">
        <div className="goals-home">
          <div className="goals">
            <div>
              <h3>Goal Types</h3>
              <p>
                Not sure what type of goals you are looking to achieve?
                <br />
                Take a look a the ones we offer
              </p>
            </div>
            <div className="goal-btns">
              <div className="goal-btns-flex">
                <div>
                  <Button
                    variant="flat1"
                    className="goal-btn"
                    as={Link}
                    to="/FitnessInfo"
                  >
                    <p>Fitness</p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="flat1"
                    className="goal-btn"
                    as={Link}
                    to="/EducationInfo"
                  >
                    <p>Education</p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="flat1"
                    className="goal-btn"
                    as={Link}
                    to="/FinanceInfo"
                  >
                    <p>Finance</p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="flat1"
                    className="goal-btn"
                    as={Link}
                    to="/ProfessionalInfo"
                  >
                    <p>Professional</p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="flat1"
                    className="goal-btn"
                    as={Link}
                    to="/SocialInfo"
                  >
                    <p>Social</p>
                  </Button>
                </div>

                <div>
                  <Button
                    variant="flat1"
                    className="goal-btn"
                    as={Link}
                    to="/HealthInfo"
                  >
                    <p>Social</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};
export default GoalsHome;
