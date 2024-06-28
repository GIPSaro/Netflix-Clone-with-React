import { Container } from "react-bootstrap";
import DropdownGenre from "./DropdownGenre";
import MyCarousel from "./MyCarousel";

const HeroSection = () => (
  <>
    <DropdownGenre />
    <Container className="mb-4">
      <h3 className="text-white pt-3">Trending Now</h3>
      <MyCarousel query="game%20of%20thrones" />
    </Container>
    <Container className="mb-4">
      <h3 className="text-white pt-3">Watch It again</h3>
      <MyCarousel query="transformers" />
    </Container>
    <Container className="mb-4">
      <h3 className="text-white pt-3">New Releases</h3>
      <MyCarousel query="harry&potter" />
    </Container>
  </>
);

export default HeroSection;
