import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Conversation from './pages/conversationPage';
import { GlobalStyles } from './styles/TranslateFormStyle';


function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/Conversation" element={<Conversation />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;