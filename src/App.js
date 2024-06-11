import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'; 
import React, {useState} from 'react';
function App() {
   // const[mode, setMode]=useState('light');
  return (
    <>
 <Navbar title="TextUtils"/>
 <div className="container my-3"> 
{/* <Navbar></Navbar> */}
<TextForm heading='Enter the text to analyze below'/>
{/* <About/> */}
</div>
   </>
);
  }
export default App;
