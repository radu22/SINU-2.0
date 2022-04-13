import {useState, useEffect, useContext,} from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";
import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';


const LOGIN_URL = '/auth';

const Register = () => {
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
                         <Row> <p>{errMsg ? errMsg : ''}</p> </Row>
                        <Row className="rectangleLogin">
                            <Container>
                                <Row><img className="logoLoginRectangle" src={require('../Styles/Logo_90.png')}/></Row>
                                    <Row className="positionContainer">
                                        <Form  onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label  className="labelRegister">Cod numeric personal</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="number"
                                                    maxlength="13"
                                                    placeholder="Cod numeric personal"
                                                    autoComplete="off"
                                                    onChange={(e) => setUser(e.target.value)}
                                                    value={user}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="labelRegister">Email</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    /*  autoComplete="off"
                                                      onChange={(e) => setUser(e.target.value)}
                                                      value={user}*/
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="labelRegister">Username</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    onChange={(e) => setUser(e.target.value)}
                                                    value={user}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="labelRegister">Password</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="password"
                                                    placeholder="Password"
                                                    aria-autocomplete={'none'}
                                                    autoComplete="off"
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="labelRegister" >Confirm Password</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    aria-autocomplete={'none'}
                                                    autoComplete="off"
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}/>
                                            </Form.Group>
                                            <button className="buttonNext"> Next </button>
                                        </Form>
                                    </Row>

                            </Container>
                        </Row>
                    </Container>
                </>

        )

    )
}

export default Register;