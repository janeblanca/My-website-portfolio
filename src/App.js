import './App.css';
import Home from './screens/HomeScreen/Home';
import Portfolio from './screens/PortfolioScreen/Porfolio';
import MyJourney from './screens/MyJourneyScreen/MyJourney';
import Contact from './screens/ContactScreen/Contact';

function App() {
  return (
    <>     
      <div id="home">
        <Home/>
      </div>
      <div id="myPortfolio">
        <Portfolio/>
      </div>
      <div id="myJourney">
        <MyJourney/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  );
}

export default App;
