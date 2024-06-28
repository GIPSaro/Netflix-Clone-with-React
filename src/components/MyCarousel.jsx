import Carousel from "react-bootstrap/Carousel";
import MyMovieCard from "./MyMovieCard";
import { Row } from "react-bootstrap";

function MyCarousel(props) {
  return (
    <Carousel interval={null} indicators={false}>
      <Carousel.Item>
        <Row>
          <MyMovieCard query={props.query} />
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <MyMovieCard query={props.query} />
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
