import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './modules/Form';
import Header from './modules/Header';
import Info from './modules/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Info />
    </div>
  );
}

export default App;
