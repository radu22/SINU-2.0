import axios from "../api/axios";
import Sidebar from "./Sidebar";
import {Button} from "@mui/material";
import useAuth from "../hooks/useAuth";
const LOGOUT_URL = '/logout';

const Dashboard = () => {
    const {auth, setAuth} = useAuth()
    const handleLogout = async () => {

        try {
            const response = await axios.post(LOGOUT_URL,
                JSON.stringify({username:auth.username}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            setAuth({})
            // console.log(response)
        } catch (err) {
              console.log(err)
        }
    }

    return (
        <>
        <Sidebar>

        </Sidebar>
            <Button onClick={handleLogout}>Log Out</Button>
        </>
    )
}

export default Dashboard;