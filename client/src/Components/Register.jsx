import {useState, useEffect, useContext,} from "react";
import axios from "../api/axios";
import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';


const REGISTER_URL = '/register';

const Register = () => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdConfirm, setPwdConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [cnp, setCnp] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
    }, [username, pwd,email,pwdConfirm,cnp]);


    /* Apeleaza API-ul cu datele din form */
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(cnp,username, pwd,email,pwdConfirm);

        if(pwd !== pwdConfirm) {
            setErrMsg('Passwords did not match!');
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({cnp, username, pwd, email}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );

            setUsername('');
            setPwd('');
            setEmail('');
            setCnp('');
            setPwdConfirm('');
            setSuccess(true);

        } catch (err) {
            if(!err?.response){
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Register Failed');
            }
        }
    }

    return (
        (success ? <>
                    <h1>LOGIN </h1>
                </>
                :
                <>
                    <Container className="positionContainerRegister">
                         <Row> <p>{errMsg ? errMsg : ''}</p> </Row>
                        <Row className="rectangleRegister">
                            <Container>
                                <Row><img className="logoLoginRectangle" src={require('../Styles/Logo_90.png')}/></Row>
<<<<<<< HEAD
                                    <Row className="positionContainerRegister">
=======
                                    <Row className="positionRegisterContainer">
>>>>>>> 662d003f370d1711c0a1db798efe12d80b22d390
                                        <Form  onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="formBasicCNP">
                                                <Form.Label  className="labelRegister">Cod numeric personal</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="number"
                                                    maxlength="13"
                                                    placeholder="Cod numeric personal"
                                                    autoComplete="off"
                                                    onChange={(e) => setCnp(e.target.value)}
                                                    value={cnp}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="labelRegister">Email</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                      autoComplete="off"
                                                      onChange={(e) => setEmail(e.target.value)}
                                                      value={email}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="labelRegister">Username</Form.Label>
                                                <Form.Control
                                                    class="form-control form-control-sm"
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    value={username}/>
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
                                                    onChange={(e) => setPwdConfirm(e.target.value)}
                                                    value={pwdConfirm}/>
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