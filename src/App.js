import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import CountArea from './components/CountArea'

function App() {
  return (
    <div className="App">
     <Header />
     <main>
       <CountArea />
     </main>
    
    </div>
  );
}

export default App;
