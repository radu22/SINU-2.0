import './App.css';
import Register from "./Components/Register";
import Login from "./Components/Login";
import BackgroundImagePage from "./Components/BackgroundImagePage";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, BrowserRouter
} from "react-router-dom";


function App() {
  return (
      <div>
        <BackgroundImagePage>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"  element={<Login />}/>
                    <Route path="/register"  element={<Register />}/>
                    <Route path="/dashboard"  element={<Dashboard />}/>
                    <Route path="/sidebar"  element={<Sidebar />}/>
                </Routes>
            </BrowserRouter>
        </BackgroundImagePage>
      </div>
  );
}

export default App;
