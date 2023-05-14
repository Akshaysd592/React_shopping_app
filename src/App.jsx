import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Footer from "./components/Footer";

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

        <div>
          <Footer/>
        </div>
  </div>
  
  )
};

export default App;
