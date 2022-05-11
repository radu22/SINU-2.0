import './App.css';
import Register from "./Components/Register";
import Login from "./Components/Login";
import BackgroundImagePage from "./Components/BackgroundImagePage";
import Settings from "./Components/Settings";
import Grupe from "./Components/Grupe";
import DropdownFacultati from'./Components/Grupe';

import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import {AuthProvider} from "./Context/AuthProvider";
import RequireAuth from "./Components/RequireAuth";
import PageLayout from "./Components/PageLayout";
import NoPageFound from "./Components/NoPageFound";


function App() {
    return (
        <div>
            <BackgroundImagePage>
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="*" element={<NoPageFound/>}/>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route element={<RequireAuth/>}>
                                <Route path="/dashboard" element={<PageLayout/>}>
                                    <Route path="*" element={<NoPageFound/>}/>
                                    <Route path="setari" element={<Settings/>}/>
                                    <Route path="grupe" element={<Grupe/>}/>
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
