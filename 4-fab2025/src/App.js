import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/Traficlight/TrafficLight';

import SevenSegmentClock from './components/digitalClock/SevenSegmentClock';

function App() {
  return (
    <div className="App">

    <SevenSegmentClock/>
     <TrafficLight/>
    </div>
  );
}

export default App;
