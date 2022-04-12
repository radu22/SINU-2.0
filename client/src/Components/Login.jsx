import {useState, useEffect, useContext,} from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";
import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';


const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);


    /* Apeleaza API-ul cu datele din form */
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken})

            setUser('');
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

                        <Row className="marginAndPaddingRectangle">
                            <p>{errMsg ? errMsg : ''}</p>
                        </Row>
                        <Row>
                            <Col xl={7} lg={6} md={5} sm={4} xs={3} xxs={2} ></Col>
                            <Col xl={3} lg={4} md={5} sm={6} xs={7} xxs={8} className="rectangleLogin">
                                <Container>
                                    <Row  className="marginAndPaddingUsername"> <img className="logoLoginRectangle" src={require('../Styles/Logo_90.png')}/></Row>
                                    <Row >
                                        <Form  onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="labelUsername">Username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    onChange={(e) => setUser(e.target.value)}
                                                    value={user}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="labelPassword" >Password</Form.Label>
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
                            </Col>
                            <Col xl={2} lg={2} md={2} sm={2} xs={6} xxs={2} ></Col>
                        </Row>
                        <Row></Row>
                    </Container>
                </>

        )

    )
}

export default Login;