// package imports
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"



// file imports
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* setting up routes for the application*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />

    </div>
  )
}

export default App
