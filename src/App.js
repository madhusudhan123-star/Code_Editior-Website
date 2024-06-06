import * as React from 'react';
import {InputGroup, Input, InputRightElement, Button, Container, Text} from '@chakra-ui/react'
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import PricingPage from './pages/Prices';
import Home from './pages/Home';
import Footer from './Components/Footer';
import Types_code from './pages/Types_code';
import CodeEditor from './code_Editior/components/CodeEditor';
import Blog from './pages/Blog';
import Ai_code from './pages/Ai_code';
import Files from './pages/Files';


function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/prices' element={<PricingPage />} />
          <Route path='/languages' element={<Types_code />} />
          <Route path='/CodeEditor' element={<CodeEditor />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/ai_code_assistant' element={<Ai_code />} /> 
          <Route path='/file' element={<Files />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
