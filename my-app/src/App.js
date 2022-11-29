import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Textforms from './components/Textforms';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

}
 const toggleMode=()=>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode is enabled","success");
  }
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white'
     showAlert("Light mode is enabled","success");
   }
 }

  return (
    

   <div className="App">
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} showAlert={showAlert}/>
    
    <div className="container" >
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textforms heading="ENTER THE TEXT TO ANALYZE" mode={mode} showAlert={showAlert} />
          </Route>
          
     </Switch>
   </div>
   </Router>
   </div> 
     

  );
}

export default App;
