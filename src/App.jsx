import {} from "react";
import {BrowserRouter as Router,Routes, Route, BrowserRouter} from "react-router-dom";
import UserDashboard from "./components/userDashboard";
import "./App.css";

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;