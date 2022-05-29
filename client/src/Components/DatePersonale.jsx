import "../Styles/ProfileDetails.css"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "../api/axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const USER_DETAILS_URL = '/getUserDetails';
const PERSONAL_DETAILS_URL = '/getPersonalDetails';

const DatePersonale = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [cnp, setCnp] = useState();
    const [personalDetails, setPersonalDetails] = useState();

    useEffect(() => {
        let ignore = false;

        if (!ignore)  getDatePersonale()
        return () => { ignore = true; }
    },[]);

    const getDatePersonale = async () => {
        try {
            const response = await axios.post(USER_DETAILS_URL,
                JSON.stringify({username: localStorage.getItem("username")}),
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
            setPersonalDetails(personalDetailsResponse.data)
            return personalDetailsResponse.data;
        } catch (err) {
            if (!err?.response) {
                console.log(err.response)
            }
        }

    }

    return (
       <div className="insertStudentForm p-4">
           <pre className="label">{JSON.stringify(personalDetails,null,2)}</pre>
       </div>


    );
}

export default DatePersonale;