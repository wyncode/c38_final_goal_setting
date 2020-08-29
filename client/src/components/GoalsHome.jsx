import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
const GoalsHome = () => {
  return (
    <Container>
      <Jumbotron fluid>
        <div className="goals">
          <h3>Goal Types</h3>
          <p>
            Not sure what type of goals you are looking to achieve?
            <br />
            Take a look a the ones we offer
          </p>
          <div className="goal-btns">
            <button>
              <Link className="link" as={Link} to="/FitnessInfo">
                Fitness
              </Link>
            </button>
            <button>
              <Link className="link" as={Link} to="/EducationInfo">
                Education
              </Link>
            </button>
            <button>
              <Link className="link" as={Link} to="/FinanceInfo">
                Finance
              </Link>
            </button>
            <button>
              <Link className="link" as={Link} to="/ProfessionalInfo">
                Professional
              </Link>
            </button>
            <button>
              <Link className="link" as={Link} to="/SocialInfo">
                Social
              </Link>
            </button>
            <button>
              <Link className="link" as={Link} to="/HealthInfo">
                Health
              </Link>
            </button>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};
export default GoalsHome;
