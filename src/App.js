import React from 'react';
import  './App.css'
import { useLocation } from 'react-router-dom'
import emailjs from 'emailjs-com';


import TopNavigation from './Components/TopNavigation'
function App() {
  emailjs.init(process.env.REACT_APP_EMAIL_USER_ID);
  let location = useLocation();
  let root =0;
  switch (location.pathname) {
    case "/":
      root = 0
      break;
    case "/projects":
        root = 2
      break;
    case "/artist":
        root =1
      break;
    case "/contacts":
      root = 3;
      break;  
    default:
      break;
  }
  return (
      <TopNavigation  active={root}/>
  );
}

export default App;
