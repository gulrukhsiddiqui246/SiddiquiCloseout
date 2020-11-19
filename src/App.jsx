import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Charger from './Components/Charger.jsx';
import PowerBank from './Components/PowerBank.jsx';
import Cable from './Components/Cable.jsx';
import HandFree from './Components/HandFree.jsx';
import Bluetooth from './Components/Bluetooth.jsx';
import Footer from './Components/Footer.jsx';
import ChargingFan from './Components/ChargingFan.jsx';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/home' component={Home}>
            <Home />
            <PowerBank />
            <ChargingFan />
            <Charger />
            <Cable />
            <HandFree />
            <Bluetooth />
            <Footer />
          </Route>
          
          {/* POWERBANK PAGE */}
          <Route path='/powerbanks' component={PowerBank} >
            <Header />
            <PowerBank />
            <Footer />
          </Route>

          {/* CABLE PAGE */}
          <Route path='/cables' component={Cable} >
            <Header />
            <Cable />
            <Footer />
          </Route>

          {/* CHARGER PAGE */}
          <Route path='/chargers' component={Charger} >
            <Header />
            <Charger />
            <Footer />

          </Route>

          {/* HANDFREES PAGE */}
          <Route path='/handfrees' component={HandFree} >
          <Header />
            <HandFree />
            <Footer />

          </Route>

          {/* BLUETOOTHS PAGE */}
          <Route path='/bluetooths' component={Bluetooth} >
          <Header />
            <Bluetooth />
            <Footer />


             </Route>
           
           {/* CHARGING FAN PAGE */}
          <Route path='/chargingfans' component={ChargingFan} >
          <Header />
            <ChargingFan />
            <Footer />


          </Route>





        </Switch>

      </div>
    </Router>
  );
}

export default App;
