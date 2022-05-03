import {useState, useEffect} from "react";
import axios from "../api/axios";
import {Form, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";


const REGISTER_URL = '/register';
const VERIFY_CNP_URL= '/verifyCnp';

const Register = () => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdConfirm, setPwdConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [cnp, setCnp] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [isCnpValid, setIsCnpValid] = useState(false);
    const [validated, setValidated] = useState(false);


    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
    }, [username, pwd, email, pwdConfirm, cnp]);

    const handleCnpSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(VERIFY_CNP_URL,
                JSON.stringify({cnp}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }

            );
            setIsCnpValid(true)


        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Cnp is required')
            } else if (err.response?.status === 401) {
                setErrMsg('Unathorized');
            } else {
                setErrMsg('Register Failed');
            }
        }


    }

    /* Apeleaza API-ul cu datele din form */
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        console.log(cnp, username, pwd, email, pwdConfirm);

        if (pwd !== pwdConfirm) {
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
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Register Failed');
            }
        }
    }

    const renderCnpForm = () => {
        return (
            <Form onSubmit={handleCnpSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCNP">
                    <Form.Label className="labelLogin">Cod numeric personal</Form.Label>
                    <Form.Control
                        required
                        class="form-control form-control-sm"
                        type="number"
                        maxlength="13"
                        placeholder="Introduceti CNP-ul"
                        autoComplete="off"
                        onChange={(e) => setCnp(e.target.value)}
                        value={cnp}/>
                </Form.Group>
                <div className="btnLogInPosition">
                    <button className="buttonLogin">Verifica</button>
                </div>
            </Form>
        )
    }
    const renderRegisterForm = () => {
        return (
            <Form onSubmit={handleRegisterSubmit} validated={validated}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="labelLogin">Email</Form.Label>
                    <Form.Control
                        required
                        class="form-control form-control-sm"
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className="labelLogin">Username</Form.Label>
                    <Form.Control
                        required
                        class="form-control form-control-sm"
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
                        class="form-control form-control-sm"
                        type="password"
                        placeholder="Password"
                        aria-autocomplete={'none'}
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="labelLogin">Confirm Password</Form.Label>
                    <Form.Control
                        required
                        class="form-control form-control-sm"
                        type="password"
                        placeholder="Confirm Password"
                        aria-autocomplete={'none'}
                        autoComplete="off"
                        onChange={(e) => setPwdConfirm(e.target.value)}
                        value={pwdConfirm}/>
                </Form.Group>

                <div className="btnLogInPosition">
                    <button className="buttonLogin">Sign Up</button>
                </div>
                <div className="textLink" style={{textAlign: "center"}}>
                    Already have an account? <Link to="/login" className="link"> Log in</Link>
                </div>
            </Form>
        )
    }
    return (
        (success ? <>
                    <h1>LOGIN </h1>
                </>
                :
                <>
                    <div className="rectangleLogin p-4">
                        <Row><img className="logoLoginRectangle" src={require('../Styles/Logo_90.png')}/></Row>
                        <Row>
                            {isCnpValid ? renderRegisterForm() : renderCnpForm()}
                        </Row>
                    </div>
                </>
        )

    )
}

export default Register;