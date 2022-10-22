import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
     <Sample color="red"/>
     <Sample color="blue"/>
     <Sample color="gray"/>
     <Sample color="black"/>
     <Sample color="purple"/>
     <Sample color="orange"/>
     <Sample color="red"/>
     <Sample color="blue"/>
     <Sample color="gray"/>
     <Sample color="black"/>
     <Sample color="purple"/>
     <Sample color="orange"/>
    </div>
  );
}

export default App;
