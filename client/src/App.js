import React from "react";
import {Navbar} from "./components";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/Homepage/homepage";
import {CreateBlogForm, SignUP, SignIN} from './pages';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <HomePage/>
      <Routes>
        {/* <Route exact path = "blogingo" element = {} /> */}
        <Route path="blogingo/signup" element={<SignUP />}/>
        <Route path="blogingo/signin" element={<SignIN />}/>
      </Routes>
  </Router>
  );
}

export default App;
