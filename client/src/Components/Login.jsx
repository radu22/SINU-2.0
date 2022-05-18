import {useState, useEffect} from "react";
import axios from "../api/axios";
import {Alert, Form, Row} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";


const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useAuth();

    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [validated, setValidated] = useState(false);

    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
    }, [username, pwd]);


    /* Apeleaza API-ul cu datele din form */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            console.log(response);
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            localStorage.setItem("token", "Bearer: " + accessToken)
            localStorage.setItem("username", username)
            localStorage.setItem("role", role)
            localStorage.setItem("isAuth", "true");

            setAuth({isAuth: true, username, pwd, role, accessToken})

            setUsername('');
            setPwd('');

            let path
            role === "STUDENT" ? path = "/dashboard" : path = "/dashboardAdmin"
            navigate(path, {replace: true});

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                console.log(err.response)
                setErrMsg(err.response.data?.message || 'Login failed')
            } else if (err.response?.status === 401) {
                setErrMsg(err.response.data?.message || 'Login failed')
            } else {
                setErrMsg('Login Failed');
            }
        }
    }
    const renderErrorMessage = () => {
        return (
            <Alert variant="danger">
                <p>{errMsg}</p>
            </Alert>
        )
    }

    const renderLoginForm = () => {
        return (
            <Form onSubmit={handleSubmit} validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className="labelLogin">Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="labelLogin">Password</Form.Label>

                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        aria-autocomplete={'none'}
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}/>
                </Form.Group>

                <div className="textLink">
                    <Link to="#" className="link"> Forgot Password ?</Link>
                </div>
                <div className="btnLogInPosition">
                    <button className="buttonLogin">Log In</button>
                </div>
                <div className="textLink" style={{textAlign: "center"}}>
                    Need an account? <Link to="/register" className="link"> Sign in</Link>
                </div>
                <div>
                    {errMsg ? renderErrorMessage() : ''}
                </div>

            </Form>
        )
    }

    return (
        <>
            <div style={{height:"100vh"}} >
            <div className="position-absolute rectangleLogin p-4">
                <Row><img className="logoLoginRectangle" src={require('../Styles/Logo_90.png')}/></Row>
                <Row>
                    {renderLoginForm()}
                </Row>
                <hr/>
            </div>
            </div>
        </>
    )
}

export default Login;