import React from 'react'
import Header from './Header.jsx'
import Principal from './principal.jsx';
import Footer from './footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

{/* Essa pagina server para fazer ás rotas do nosso site. */}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/Home' element={<Principal/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
