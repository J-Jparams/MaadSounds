import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route,  Routes, useLocation } from 'react-router-dom';
import Home from './scenes/home/Home';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu';
import Footer from './scenes/global/Footer';
import ItemDetails from './scenes/itemDetails/ItemsDetails';


const ScrollToTop = () => {
  const { pathname } = useLocation();


  useEffect(() => {
  window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return <div className='app'>
   <BrowserRouter>
   <Navbar />
   <ScrollToTop />
   <Routes>
      <Route path='/' element={<Home />} />
         <Route path='item/:itemId' element={<ItemDetails />} />
   </Routes>
   <CartMenu />
   <Footer />
   </BrowserRouter>
  </div>
}

export default App;