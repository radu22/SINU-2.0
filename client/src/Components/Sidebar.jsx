import "../Styles/Sidebar.css"
import {DataSidebar} from './DataSidebard'
import {Navbar} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import {useState} from "react";
import ProfileDetails from "./ProfileDetails";
import logout from './DataSidebard';

const USER_DETAILS_URL = '/getUserDetails';
const PERSONAL_DETAILS_URL = '/getPersonalDetails';


const Sidebar = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [cnp, setCnp] = useState();
    let {auth} = useAuth();
    let navigate = useNavigate();


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
                JSON.stringify({cnp: cnp}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );

            setFirstName(personalDetailsResponse.data.prenume)
            setLastName(personalDetailsResponse.data.nume)

            // console.log(response.data[0])
            // console.log(personalDetailsResponse.data)

            return response?.data[0];
        } catch (err) {
            if (!err?.response) {
                console.log(err.response)
            }
        }

    }

    const userDetails = getNameAndEmail();
    return (

        <div className="sidebar">
            <Navbar.Brand href="/dashboard">
                <img className="UTCN" src={require('../Styles/utcluj_logo.png')}/>
            </Navbar.Brand>
            {/*<ProfileDetails email={email} firstName={firstName} lastName={lastName}/>*/}
            <ul className="SidebarList">
                {DataSidebar.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="roow"
                                id={window.location.pathname === "/dashboard" + val.link ? "active" : ""}
                                // onClick={() =>{window.location.pathname = "/dashboard" + val.link}}>
                                onClick={() => {
                                    val.function();
                                    navigate("/dashboard" + val.link)
                                }}>
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                            </li>
                        )
                    }
                )
                }
            </ul>
        </div>
    );
}

export default Sidebar

