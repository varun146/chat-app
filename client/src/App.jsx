// package imports
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// file imports
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* setting up routes for the application */}
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        {/* If the user is logged in Navigate to the home route else stay on signup */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
