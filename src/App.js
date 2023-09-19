import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const [text,setText]=useState("Enter here");
  const handleUppercase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(e)=>{
    setText(e.target.value);
  }
  const handleLowercase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClear=()=>{
    let newText=" ";
    setText(newText);
  }
  const handleOnCopy=()=>{
    navigator.clipboard.writeText(text);
  }
  const handleRemovespaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));  
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    // console.log(cls)
    // document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      document.body.style.color='white';
      document.body.style.backgroundColor='#212529';
      setMode('dark');
      showAlert('Dark mode enabled.','success');
      setInterval(() => {
        setAlert(null);
      }, 5000);
    }
    else{
      document.body.style.color='#212529';
      document.body.style.backgroundColor='white';
      setMode('light');
      showAlert('Light mode enabled.','success');
      setInterval(() => {
        setAlert(null);
      }, 5000);
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
      <Routes>
      <Route exact path='/' element={<Textform heading="Try TextUtils-Word Counter,Character Counter,Remove Extra Spaces" text={text} handleUppercase={handleUppercase} 
      handleLowercase={handleLowercase} handleOnChange={handleOnChange} handleClear={handleClear}
      setText={setText} handleOnCopy={handleOnCopy} handleRemovespaces={handleRemovespaces} mode={mode}/>}/>
      <Route exact path='/about' element={<About heading="About us" mode={mode}/>}/> 
      </Routes>
    </div>
    </BrowserRouter> 
   </>
  );
}

export default App;
