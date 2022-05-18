import {useState, useEffect} from "react";
import {Alert, Form, Row} from 'react-bootstrap';
import "../../Styles/InsertStudent.css"
import axios from "../../api/axios";

const INSERT_STUDENT_URL = '/insert';

const InsertStudent = () => {
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [email, setEmail] = useState('');
    const [cnp, setCnp] = useState();
    const [telefon, setTelefon] = useState('');
    const [dataNasterii, setDataNasterii] = useState();
    const [specializareId, setSpecializareId] = useState(0);
    const [an, setAn] = useState(0);
    const [grupa, setGrupa] = useState(0);
    const [limba, setLimba] = useState('');
    const [nrCatalog, setNrCatalog] = useState();

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    /* Sterge erroarea in momentul in care user/pwd sunt modificate */
    useEffect(() => {
        setErrMsg('');
        setSuccessMsg('');
    }, [nume, prenume, email, cnp, telefon, dataNasterii, grupa, limba, nrCatalog]);


    /* Apeleaza API-ul cu datele din form */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        try {
            const response = await axios.post(INSERT_STUDENT_URL,
                JSON.stringify({
                    "nume": nume,
                    "prenume": prenume,
                    "cnp": cnp,
                    "email": email,
                    "telefon": telefon,
                    "data_nasterii": dataNasterii,
                    "limba": limba,
                    "specializareId": specializareId,
                    "an": an,
                    "grupa": grupa,
                    "nr_catalog": nrCatalog
                }),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            console.log(response);

            if (response.status === 200) {
                setSuccessMsg("Student adaugat cu succes!")
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

    const renderInsertStudentForm = () => {
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
                <Form.Group className="mb-3" controlId="formBasicPrenume">
                    <Form.Label className="label">Nume</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Prenume"
                        autoComplete="off"
                        onChange={(e) => setPrenume(e.target.value)}
                        value={prenume}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCnp">
                    <Form.Label className="label">Cod numeric personal</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Cod numeric personal"
                        autoComplete="off"
                        onChange={(e) => setCnp(e.target.value)}
                        value={cnp}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefon">
                    <Form.Label className="label">Telefon</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Telefon"
                        autoComplete="off"
                        onChange={(e) => setTelefon(e.target.value)}
                        value={telefon}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicData">
                    <Form.Label className="label">Data nasterii</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        placeholder="data nasterii"
                        autoComplete="off"
                        onChange={(e) => setDataNasterii(e.target.value)}
                        value={dataNasterii}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLimba">
                    <Form.Label className="label">Limba</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="limba"
                        autoComplete="off"
                        onChange={(e) => setLimba(e.target.value)}
                        value={limba}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSpecializareId">
                    <Form.Label className="label">Specializare</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="specializareId"
                        autoComplete="off"
                        onChange={(e) => setSpecializareId(e.target.value)}
                        value={specializareId}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAn">
                    <Form.Label className="label">An</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="an"
                        autoComplete="off"
                        onChange={(e) => setAn(e.target.value)}
                        value={an}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGrupa">
                    <Form.Label className="label">Grupa</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="grupa"
                        autoComplete="off"
                        onChange={(e) => setGrupa(e.target.value)}
                        value={grupa}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNrCatalog">
                    <Form.Label className="label">Numar catalog</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="numar catalog"
                        autoComplete="off"
                        onChange={(e) => setNrCatalog(e.target.value)}
                        value={nrCatalog}/>
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
                    {renderInsertStudentForm()}
                </Row>
            </div>

        </>
    )
}

export default InsertStudent;