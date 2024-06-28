import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroSection from "./components/HeroSection";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
/* import ProfilePage from "./components/ProfilePage"; */
function App() {
  return (
    <div className="App">
      <MyNav />
      {/* <ProfilePage/> */}
      <HeroSection />

      <MyFooter />
    </div>
  );
}

export default App;
