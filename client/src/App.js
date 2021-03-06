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
import InsertStudent from "./Components/Admin/InsertStudent";
import InsertMaterie from "./Components/Admin/InsertMaterie";
import DatePersonale from "./Components/DatePersonale";

const roles = [
    "PROFESOR",
    "STUDENT"
]
function App() {
    return (
        <div>
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="*" element={<NoPageFound/>}/>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route element={<RequireAuth allowedRoles={roles[1]}/>}>
                                <Route path="/dashboard" element={<PageLayout/>}>
                                    <Route path="*" element={<NoPageFound/>}/>
                                    <Route path="setari" elementdashboardAdmin={<Settings/>}/>
                                    <Route path="grupe" element={<Grupe/>}/>
                                    <Route path="datePersonale" element={<DatePersonale/>}/>
                                </Route>
                            </Route>
                            <Route element={<RequireAuth allowedRoles={roles[0]}/>}>
                                <Route path="/dashboardAdmin" element={<PageLayout/>}>
                                    <Route path="*" element={<NoPageFound/>}/>
                                    <Route path="insertStudent" element={<InsertStudent/>}/>
                                    <Route path="insertMaterie" element={<InsertMaterie/>}/>
                                </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
        </div>
    )
        ;
}

export default App;
