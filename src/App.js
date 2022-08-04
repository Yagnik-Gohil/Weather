import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import About from './components/About';
import AirPollution from './components/AirPollution';
import Message from './components/Message';

function App() {
  let today = new Date().toLocaleDateString().replace(/\//g,"")
  return (
    <div className="App app-container container-fluid">
      <div className="row main-row">

        <Left></Left>

          <Routes>
            <Route path="/" element={<Navigate to={"/dashboard/"+today} />} exact></Route>
            <Route path={"/dashboard/:date"} element={<Middle/>}></Route>
            <Route path="/airpollution/:date" element={<AirPollution/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<Message/>}></Route>
          </Routes>
        
        <Right></Right>

      </div>
    </div>
  );
}

export default App;
