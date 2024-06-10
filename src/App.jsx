import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/containers/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/containers/itemDeatailContainer/itemDetailContainer'
import { BrowserRouter, Routes, Route }from "react-router-dom"

function App() {

  const [categoria, setCategoria] = useState('todos')

  
  return (
    <>
    <BrowserRouter>
      {/* <button>AccessoriesTech</button> */}
      <Navbar handleCategoria={setCategoria}/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/> 
        {/* <ItemDetailContainer idProduct={4} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
