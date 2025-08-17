import React from 'react';


import {Routes,Route} from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './pages/Home';


import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';



export default function App(){
  return(
    <div>
      <Navbar/>
      <div className='p-6'>
        <Routes>
  <Route path='/'  element={<Home/>}   ></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/products' element={<Products/>}></Route>
  <Route path='/products/:id' element={<ProductDetails/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
  


        </Routes>

      </div>
    </div>
  )
}