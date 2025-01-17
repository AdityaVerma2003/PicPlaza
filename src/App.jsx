import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import BuyerDashboard from "./Pages/BuyerDashboard"
import SellerDashboard from "./Pages/SellerDashboard"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/buyer/profile" element={<BuyerDashboard/>}/>
        <Route path="/seller/profile" element={<SellerDashboard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}