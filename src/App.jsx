import React from 'react';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className='main'>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
