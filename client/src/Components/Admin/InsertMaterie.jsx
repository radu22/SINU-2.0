import {useState, useEffect} from "react";
import {Alert, Form, Row} from 'react-bootstrap';
import "../../Styles/InsertStudent.css"
import axios from "../../api/axios";

const INSERT_MATERIE_URL = '/insertMaterie';

const InsertMaterie = () => {
    const [profesorId, setProfesorId] = useState(0);
    const [nume, setNume] = useState('');
    const [nrCredite, setNrCredite] = useState();
    const [specializareId, setSpecializareId] = useState(0);
    const [an, setAn] = useState(0);

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
        setSuccessMsg('');
    }, [nume, nrCredite, profesorId, specializareId,an]);


    /* Apeleaza API-ul cu datele din form */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        try {
            const response = await axios.post(INSERT_MATERIE_URL,
                JSON.stringify({
                    "nume": nume,
                    "profesorId": profesorId,
                    "specializareId": specializareId,
                    "an": an,
                    "numar_credite": nrCredite
                }),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            console.log(response);

            if (response.status === 200) {
                setSuccessMsg("Materie adaugata cu succes!")
            }
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
    const renderSuccessMessage = () => {
        return (
            <Alert variant="success">
                <p>{successMsg}</p>
            </Alert>
        )
    }

    const renderInsertMaterieForm = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNume">
                    <Form.Label className="label">Nume</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nume"
                        autoComplete="off"
                        onChange={(e) => setNume(e.target.value)}
                        value={nume}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNrCredite">
                    <Form.Label className="label">Numar credite</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="numar credite"
                        autoComplete="off"
                        onChange={(e) => setNrCredite(e.target.value)}
                        value={nrCredite}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSpecializareId">
                    <Form.Label className="label">Specializare</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="specializare"
                        autoComplete="off"
                        onChange={(e) => setSpecializareId(e.target.value)}
                        value={specializareId}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfesorId">
                    <Form.Label className="label">Profesor</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Profesor"
                        autoComplete="off"
                        onChange={(e) => setProfesorId(e.target.value)}
                        value={profesorId}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAn">
                    <Form.Label className="label">An</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="An"
                        autoComplete="off"
                        onChange={(e) => setAn(e.target.value)}
                        value={an}/>
                </Form.Group>

                <div className="btnLogInPosition">
                    <button className="buttonLogin">Insert</button>
                </div>
                <div>
                    {errMsg ? renderErrorMessage() : ''}
                </div>
                <div>
                    {successMsg ? renderSuccessMessage(): ''}
                </div>


            </Form>
        )
    }

    return (
        <>
            <div className="insertStudentForm p-4">
                <Row>
                    {renderInsertMaterieForm()}
                </Row>
            </div>

        </>
    )
}

export default InsertMaterie;