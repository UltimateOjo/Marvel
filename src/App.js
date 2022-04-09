import hulk from './hulk.jpg';
import black from './black-panther.jpg'
import thor from './thor.jpg'
import wolverine from './wolverine.jpg'
import wonder from './wonder-woman.jpg'
import ironman from './ironman.jpg'
import captain from './captain-america.jpg'
import spiderman from './spiderman.jpg'
import thanos from './thanos.jpg'
import doom from './dr-doom.jpg'
import octopus from './dr-octopus.jpg'
import goblin from './green-goblin.jpg'
import galactus from './galactus.jpg'
import magneto from './magneto.jpg'
import loki from './loki.jpg'
import phoenix from './dark-phoenix.jpg'

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="center">
        <div className="App">
            <button><img src={hulk} className="App-logo" alt="logo" width={100} height={100}/></button>
            <button><img src={black} className="App-logo1" alt="logo" width={100} height={100}/></button>
            <button><img src={thor} className="App-logo2" alt="logo" width={100} height={100}/></button>
            <button><img src={wolverine} className="App-logo3" alt="logo" width={100} height={100}/></button>
            <button><img src={captain} className="App-logo4" alt="logo" width={100} height={100}/></button>
            <button><img src={spiderman} className="App-logo5" alt="logo" width={100} height={100}/></button>
            <button><img src={wonder} className="App-logo6" alt="logo" width={100} height={100}/></button>
            <button><img src={phoenix} className="App-logo7" alt="logo" width={100} height={100}/></button>
            <button><img src={goblin} className="App-logo8" alt="logo" width={100} height={100}/></button>
            <button><img src={doom} className="App-logo9" alt="logo" width={100} height={100}/></button>
            <button><img src={octopus} className="App-logo10" alt="logo" width={100} height={100}/></button>
            <button><img src={thanos} className="App-logo11" alt="logo" width={100} height={100}/></button>
            <button> <img src={ironman} className="App-logo12" alt="logo" width={100} height={100}/></button>
            <button><img src={galactus} className="App-logo13" alt="logo" width={100} height={100}/></button>
            <button><img src={magneto} className="App-logo14" alt="logo" width={100} height={100}/></button>
            <button><img src={loki} className="App-logo15" alt="logo" width={100} height={100}/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
