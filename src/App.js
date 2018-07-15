import { Component } from 'inferno';
import './registerServiceWorker';
import camaron3 from './camaron3.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">CARLOTA</h1>
        <img className="callingCard" src={camaron3} alt="callingCard" />
      </div>
    );
  }
}

export default App;
