import './App.css';
import React from 'react';
import AboutMe from './Component';

const Compromissos = ['estuda', 'anotar', 'praticar', 'revisar'];


const Task = () => {
  return (Compromissos.map(file => <li key={file}>{file}</li>)
    
  );
}



function App() {
  return (

    // AboutMe();

  Task()
  );
}

export default App;
