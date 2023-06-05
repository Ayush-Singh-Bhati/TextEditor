
import './App.css';
import Form from './componants/Form';
import Navbar from './componants/Navbar';
import Alert from './componants/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import About from './componants/About';

function App() { 
  const [mode, setMode] = useState ("light"); 
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
        msg : message,
        type : type
    })
    setTimeout(() => {
        setalert(null)
    }, 1500)
  }
  

  const togglemode =() =>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.color ="white" 
      document.body.style.backgroundColor ="grey" 
      showalert("Dark mode Enable.","success");
    }
    else{
      setMode("light");
      document.body.style.color ="black" 
      document.body.style.backgroundColor ="white" 
      showalert("Light mode Enable.","success");
    }
  }

  return (
   <>
  <BrowserRouter>
     <Navbar title="TextEditor"  mode={mode} toggleMode={togglemode} />
       <Alert alert={alert}/>
            <div className="container">
              <Routes>
                  <Route exact path="/" element={<Form mode={mode} showalert={showalert} />}/>
                  <Route exact path="/about" element={<About mode={mode}/>}/>
              </Routes>
            </div>
    </BrowserRouter>
   </>
  );
}

export default App;
