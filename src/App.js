
import './App.css';
import './style.css'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './components/Pages/Search';

import { Suspense } from 'react'

import AppProvider from './context/AppProvider';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
      <Navbar />
        <AppProvider>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/search' element={<Search/>} />
      </Routes>
        </AppProvider>
      </BrowserRouter >
      </Suspense>
  
    </div>
  );
}

export default App;
