import React,{useEffect} from 'react';
// import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';



const  App = ()  =>{

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
    
  }, []);
  

  return (
    <>
    <Router basename="/DBSRCollege">
      <Routes>
      <Route path="/" element={<Home />} />
       


      </Routes>
    </Router>
    </>
  );
};

export default App;
