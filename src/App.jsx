import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "./components/HeroSection";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <HeroSection />

      <MyFooter />
    </div>
  );
}

export default App;
