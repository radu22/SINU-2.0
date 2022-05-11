import '../Styles/Settings.css'
import {Button} from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const LOGOUT_URL = '/logout';

const Logout = () => {

    const {auth, setAuth} = useAuth()
    const handleLogout = async () => {

        try {
            const response = await axios.post(LOGOUT_URL,
                JSON.stringify({username: auth.username}),
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
            <Button onClick={handleLogout}>Logout</Button>
        </>
    )

}
export default Logout;