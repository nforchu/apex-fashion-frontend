
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './routes/authentication/authentication.component';

import Contact from './routes/contact/contact.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} /> 
        <Route path='contact' element={<Contact />} /> 
        <Route path='auth' element={<Authentication />} />     
      </Route>
    </Routes>
  );
}

/*class SampleApp extends React.Component{

  constructor() {
    super();
    this.state ={
      name: "Will Nforchu"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <ReactLogo className='logo' />      
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Hi {this.state.name}</h1>
          <button
            onClick={() => {
              this.setState(
                () => {return {name: "Andrie"}}, 
                () => console.log(this.state));
              
            }}>Change name</button>
            
        </header>
      </div>
    );
  }
}*/

export default App;
