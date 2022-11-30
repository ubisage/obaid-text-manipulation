import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
  //ALERTS
  const [alert, setAlert] = useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  //DARK MODE NAVBAR
  const [mode, setmode] = useState("light"); //wheteher dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background='#081c45';
      showAlert("Dark Mode Enabled","success");
    } else {
      setmode("light");
      document.body.style.background='white';
      showAlert("Light Mode Enabled","success")
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="OBAID"
        aboutText="About US"
        mode={mode}
        toggleMode={toggleMode}
       
      />
      <Alert alert={alert}/>

      <div className="container my-3">
      
            <Routes>
            <Route path="/About" element={<About mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        
        {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        <About /> */}
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
