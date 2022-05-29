import {useState, useEffect} from "react";
import axios from "../api/axios";
import {Dropdown} from "react-bootstrap";

const FACULTATI_URL = '/getFacultati';

 function DropdownFacultati() {
     const [errMsg, setErrMsg] = useState('');
     const [shouldRenderSpecializari, setShouldRenderSpecializari] = useState(false);
     const [listaFacultati, setListaFacultati] = useState([]);
     const [selectedFacultate, setSelectedFacultate] = useState("");

     useEffect(() => {
         let ignore = false;

         if (!ignore)  getAllFacultati()
         return () => { ignore = true; }
     },[]);

     const getAllFacultati = async () => {
         try {
             const response = await axios.get(FACULTATI_URL,
                 JSON.stringify({}),
                 {
                     headers: {'Content-Type': 'application/json'},
                     withCredentials: false
                 }
             );
             console.log(response);
             let facultatiArray = response.data;
             let ListaFacultati = facultatiArray.map(facultati => facultati.nume_facultate);
             setListaFacultati(ListaFacultati);
         } catch (err) {
             if (!err?.response) {
                 setErrMsg('No Server Response');
             } else if (err.response?.status === 400) {
                 console.log(err.response)
                 setErrMsg(err.response.data?.message || '...')
             } else if (err.response?.status === 401) {
                 setErrMsg(err.response.data?.message || 'abc')
             } else {
                 setErrMsg('Login Failed');
             }
         }
     }

     const renderSpecializari = () => {
         return (
             <div>
                 Specializari pentru {selectedFacultate}
             </div>
         )
     }

    return (
        <div href='/grupe'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Facultati
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {listaFacultati.map(facultate => <Dropdown.Item as="button" onClick={() => {setShouldRenderSpecializari(true); setSelectedFacultate(facultate)}}>{facultate}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
            {shouldRenderSpecializari ? renderSpecializari() : ""}
        </div>
    )
}

const Grupe = () => {


    return (
        <div style={{ width: 200}}>
            <DropdownFacultati />

        </div>
    )
}

export default Grupe