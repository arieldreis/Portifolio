import React from 'react'
import Header from './Header.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

{/* Essa pagina server para fazer ás rotas do nosso site. */}

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Header/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
