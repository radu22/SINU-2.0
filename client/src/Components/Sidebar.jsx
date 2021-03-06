import "../Styles/Sidebar.css"
import {DataSidebarProfesor, DataSidebarStudent} from './DataSidebard'
import {Navbar} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import {useEffect, useState} from "react";
import ProfileDetails from "./ProfileDetails";

const USER_DETAILS_URL = '/getUserDetails';
const PERSONAL_DETAILS_URL = '/getPersonalDetails';
const LOGOUT_URL = '/logout';

const Sidebar = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [cnp, setCnp] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        let ignore = false;

        if (!ignore)  getNameAndEmail()
        return () => { ignore = true; }
    },[]);

    const {auth, setAuth} = useAuth()
    const handleLogout = async () => {
        try {
            await axios.post(LOGOUT_URL,
                JSON.stringify({username: auth.username}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            localStorage.removeItem("username")
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            localStorage.removeItem("isAuth")
            setAuth({})

            navigate("/login", {replace: true});
        } catch (err) {
            console.log(err)
        }
    }

    const getNameAndEmail = async () => {
        try {
            const response = await axios.post(USER_DETAILS_URL,
                JSON.stringify({username: auth.username}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            setEmail(response.data[0].email)
            setCnp(response.data[0].cnp)

            const personalDetailsResponse = await axios.post(PERSONAL_DETAILS_URL,
                JSON.stringify({cnp: response.data[0].cnp}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );

            setFirstName(personalDetailsResponse.data.prenume)
            setLastName(personalDetailsResponse.data.nume)

            return response?.data[0];
        } catch (err) {
            if (!err?.response) {
                console.log(err.response)
            }
        }

    }

    const renderDataSidebarStudent = () => {
        return (

            <ul className="SidebarList">
                {DataSidebarStudent.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="roow"
                            id={window.location.pathname === "/dashboard" + val.link ? "active" : ""}
                            onClick={() => {
                                if (val.title === "Log out")
                                    handleLogout().then(r => console.log("Logout successful"))
                                else
                                    navigate("/dashboard" + val.link)
                            }}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
    const renderDataSidebarProfesor = () => {
        return (
            <ul className="SidebarList">
                {DataSidebarProfesor.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="roow"
                            id={window.location.pathname === "/dashboardAdmin" + val.link ? "active" : ""}
                            onClick={() => {
                                if (val.title === "Log out")
                                    handleLogout().then(r => console.log("Logout successful"))
                                else
                                    navigate("/dashboardAdmin" + val.link)
                            }}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="sidebar">
            <Navbar.Brand href="/dashboard">
                <img className="UTCN" alt="" src={require('../Styles/utcluj_logo.png')}/>
            </Navbar.Brand>
            <ProfileDetails email={email} firstName={firstName} lastName={lastName}/>
            <div className="line"/>
            {auth.role === "STUDENT"
                ? renderDataSidebarStudent()
                : renderDataSidebarProfesor()
            }
        </div>
    );
}

export default Sidebar