import './App.css';
import {Routes,Route} from "react-router-dom";
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import About from './components/About';
import AirPollution from './components/AirPollution';

function App() {
  return (
    <div className="App app-container container-fluid">
      <div className="row main-row">

        <Left></Left>

          <Routes>
            <Route path="/" element={<Middle/>}></Route>
            <Route path="/airpollution" element={<AirPollution/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        
        <Right></Right>

      </div>
    </div>
  );
}

export default App;
