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
import React, { useState } from 'react';
import Info from './Info';
import Data from './Data';

function App() {
  const [isOpen, setIsOpen] = useState()

  function changePage () {

  }

  return (
    <>
        <div className="App">
          <nav>
            <button variant="primary" onClick={() => setIsOpen("hulkInfo")}><img src={hulk} className="App-logo" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("blackInfo")}><img src={black} className="App-logo1" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("thorInfo")}><img src={thor} className="App-logo2" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("wolverineInfo")}><img src={wolverine} className="App-logo3" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("captainInfo")}><img src={captain} className="App-logo4" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("spidermanInfo")}><img src={spiderman} className="App-logo5" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("wonderInfo")}><img src={wonder} className="App-logo6" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("phoenixInfo")}><img src={phoenix} className="App-logo7" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("goblinInfo")}><img src={goblin} className="App-logo8" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("doomInfo")}><img src={doom} className="App-logo9" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("octopusInfo")}><img src={octopus} className="App-logo10" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("thanosInfo")}><img src={thanos} className="App-logo11" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("ironmanInfo")}> <img src={ironman} className="App-logo12" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("galactusInfo")}><img src={galactus} className="App-logo13" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("magnetoInfo")}><img src={magneto} className="App-logo14" alt="logo" width={100} height={100}/></button>
            <button variant="primary" onClick={() => setIsOpen("lokiInfo")}><img src={loki} className="App-logo15" alt="logo" width={100} height={100}/></button>
          </nav>
          <div>
            {isOpen==="hulkInfo"  &&<Info data={Data} powerIndex={0}/>}
            {isOpen==="blackInfo" &&<Info data={Data} powerIndex={1}/>}
            {isOpen==="thorInfo" &&<Info data={Data} powerIndex={2}/>}
            {isOpen==="wolverineInfo" &&<Info data={Data} powerIndex={3}/>}
            {isOpen==="captainInfo" &&<Info data={Data} powerIndex={4}/>}
            {isOpen==="spidermanInfo" &&<Info data={Data} powerIndex={5}/>}
            {isOpen==="wonderInfo" &&<Info data={Data} powerIndex={6}/>}
            {isOpen==="phoenixInfo" &&<Info data={Data} powerIndex={7}/>}
            {isOpen==="goblinInfo" &&<Info data={Data} powerIndex={8}/>}
            {isOpen==="doomInfo" &&<Info data={Data} powerIndex={9}/>}
            {isOpen==="octopusInfo" &&<Info data={Data} powerIndex={10}/>}
            {isOpen==="thanosInfo" &&<Info data={Data} powerIndex={11}/>}
            {isOpen==="ironmanInfo" &&<Info data={Data} powerIndex={12}/>}
            {isOpen==="galactusInfo" &&<Info data={Data} powerIndex={13}/>}
            {isOpen==="magnetoInfo" &&<Info data={Data} powerIndex={14}/>}
            {isOpen==="lokiInfo" &&<Info data={Data} powerIndex={15}/>}
          </div>
      </div>
    </>
  );
}           
export default App;
