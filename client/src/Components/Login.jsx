import {useState, useEffect, useContext,} from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";
import {Form, Container, Row, Col} from 'react-bootstrap';

const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
    }, [username, pwd]);


    /* Apeleaza API-ul cu datele din form */
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, pwd);

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );

            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            setAuth({username, pwd, role, accessToken})

            setUsername('');
            setPwd('');
            setSuccess(true);

        } catch (err) {
            if(!err?.response){
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }

    return (
        (success ? <>
                    <h1>LOGIN </h1>
                </>
                :
                <>
                    <Container>

                        <Row><p>{errMsg ? errMsg : ''}</p></Row>
                        <Row className="rectangleLogin" >
                                <Container>
                                    <Row> <img className="logoLoginRectangle" src={require('../Styles/Logo_90.png')}/></Row>
                                    <Row className="positionLoginContainer">
                                        <Form  onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="labelLogin">Username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    value={username}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="labelLogin" >Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    aria-autocomplete={'none'}
                                                    autoComplete="off"
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}/>
                                            </Form.Group>
                                            <button className="buttonLogin"> Log In </button>
                                            <button className="buttonSignin"> Sign in </button>
                                            <button className="buttonForgotPassword"> Forgot Password </button>
                                        </Form>
                                    </Row>
                                </Container>
                        </Row>
                    </Container>
                </>
        )
    )
}

export default Login;