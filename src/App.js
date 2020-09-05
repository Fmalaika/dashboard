import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import CountArea from './components/CountArea'
import BarGraph from './components/BarGraph'
import DoughnutChart from './components/DoughnutChart'

function App() {
  return (
    <div className="App">
     <Header />
     <main>
       <CountArea />
       <BarGraph />
       <DoughnutChart />
     </main>
    
    </div>
  );
}

export default App;
