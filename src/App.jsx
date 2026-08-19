import {} from "react";
import {BrowserRouter as Router,Routes, Route, BrowserRouter} from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;