import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Accommodation from "./components/Accommodation/Accommodation";
import Facilities from "./components/Facilities/Facilities";
import FoodBeverage from "./components/FoodBeverage/FoodBeverage";
import TouristSpot from "./components/TouristSpot/TouristSpot";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
      <div>
        <div className = "beginning"></div>
        <Header />
        <Hero />
        <Video /> 
        <TouristSpot />
        <FoodBeverage />
        <Accommodation />
        <Facilities />
        <div className = "dark"></div>
        <Footer />
     </div>
    </div>
  );
}

export default App;
