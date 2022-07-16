import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

{/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
*/}
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode  has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode  has been enabled", "success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container" my-3>
          {/*<Routes>
              <Route exact path="/about" element={<About/>}></Route>
              <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}></Route>
  </Routes>*/}
       <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    {/*</Router> */}
    </>
  );
}

export default App;