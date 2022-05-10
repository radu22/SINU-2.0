import './App.css';
import Register from "./Components/Register";
import Login from "./Components/Login";
import BackgroundImagePage from "./Components/BackgroundImagePage";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Settings from "./Components/Settings";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import {AuthProvider} from "./Context/AuthProvider";
import RequireAuth from "./Components/RequireAuth";
import PageLayout from "./Components/PageLayout";
import Logout from "./Components/Logout";


function App() {
    return (
        <div>
            <BackgroundImagePage>
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route element={<RequireAuth/>}>
                                <Route path="/dashboard" element={<PageLayout/>}>
                                    <Route path="*" element={<></>}/>
                                    <Route path="sidebar" element={<Sidebar/>}/>
                                    <Route path="setari" element={<Settings/>}/>
                                </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </BackgroundImagePage>
        </div>
    )
        ;
}

export default App;
