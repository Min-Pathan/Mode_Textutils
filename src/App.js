import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm  from "./components/TextForm";
import Alert  from "./components/Alert";
import { BrowserRouter as Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState(null);
  const showAlert= (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  // const removeBodyClasses=()=>
  // {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  // }
  const toggleMode=(cls)=>{
    //removeBodyClasses();
    //document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor="#343a40"
      //showAlert(`${cls} mode has been enabled`, cls);
      showAlert("Dark mode enabled", "success");
      //document.title="Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      //showAlert(`${cls} mode has been enabled`, cls);
      showAlert("Light mode has been enabled", "success");
      //document.title="Light Mode"
    }

  }  
  return (
    <>
      {/* <Navbar title="TextUtils" homePage="Home" aboutText = "About us"/>  */}
      <Routes>
        <Navbar title="TextUtils" homePage="Home" mode={mode} toggleMode={toggleMode}/> 
        <Alert alert={alert}/>
        <div className="container my-3">          
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>    
            <Route exact path="/"> 
              <TextForm heading="Try TextUtils - Word counter, character counter" showAlert={showAlert} mode={mode}/>            
            </Route>
          </div> 
      </Routes>             
    </>
  );
}

export default App;
