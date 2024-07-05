
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast";

// isAuth checks if the user data is present in localStorage if it is not it does not send the user to home page
function App() {
   
   const isAuth=localStorage.getItem("user");

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/home" element={isAuth?<Home/>:<Signup/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
  )
}

export default App
