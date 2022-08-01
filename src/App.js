import './App.css';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';

function App() {
  return (
    <div className="App app-container container-fluid">
      <div className="row main-row">

        <Left></Left>

        <Middle></Middle>
        
        <Right></Right>

      </div>
    </div>
  );
}

export default App;
