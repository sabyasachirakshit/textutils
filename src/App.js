import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
function App() {

  const [Mode, setMode] = useState('light'); //wether dark mode is enabled or not
  const [greenMode, setGreenMode] = useState('light');
  const [yellowMode, setYellowMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Blue mode has been enabled', 'success');
    }
  }
  const toggleGreenMode = () => {
    if (greenMode === 'dark_green') {
      setMode('light');
      setGreenMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    } else {
      setMode('dark');
      setGreenMode('dark_green');
      document.body.style.backgroundColor = 'rgb(26, 41, 26)';
      showAlert('Dark Green mode has been enabled', 'success');
    }
  }
  const toggleYellowMode = () => {
    if (yellowMode === 'dark_yellow') {
      setMode('light');
      setYellowMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    } else {
      setMode('dark');
      setYellowMode('dark_yellow');
      document.body.style.backgroundColor = 'rgb(56, 56, 32)';
      showAlert('Dark Yellow mode has been enabled', 'success');
    }
  }
  //'';
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title="TextUtilsSR" aboutText="About Us" mode={Mode} toggleYellowMode={toggleYellowMode} toggleGreenMode={toggleGreenMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm mode={Mode} showAlert={showAlert} heading="Enter the Text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
