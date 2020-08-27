import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Slider from 'infinite-react-carousel';
import { Jumbotron } from 'react-bootstrap';

function HomeSlides({ props }) {
  const settings = {
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    duration: 100,
    shift: 200,
    swipe: false
  };

  return (
    <Container>
      <Jumbotron>
        <div className="testimonials">
          <h3>User Stories</h3>
        </div>
        <Slider dots {...settings}>
          <div className="t-box">
            <div>
              <Image className="pic-t" src={require('./images/climb.jpg')} />
              <p>
                <em>
                  "I hate setting goals, always have, always will. This website
                  though has completely changed that."
                </em>
                <br /> -Nick Miller
              </p>
            </div>
          </div>

          <div className="t-box">
            <div>
              <Image className="pic-t" src={require('./images/marathon.jpg')} />
              <p>
                "Because of StoryLine, I was able to track my savings and
                eventually buy my first home"
                <br /> -Demi Cahills
              </p>
            </div>
          </div>

          <div className="t-box">
            <div>
              <Image className="pic-t" src={require('./images/graduate.jpg')} />
              <p>
                "I love a challenge - and taking advantage of Storyline's
                teaching challenges enhances my techniques."
                <br /> -Gessica Tortolano
              </p>
            </div>
          </div>
        </Slider>
      </Jumbotron>
    </Container>
  );
}

export default HomeSlides;
