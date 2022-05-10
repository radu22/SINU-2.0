import {useState, useEffect} from "react";
import axios from "../api/axios";

const FACULTATI_URL = '/getFacultati';

 function DropdownFacultati() {
     const [errMsg, setErrMsg] = useState('');
     const [listaFacultati, setListaFacultati] = useState([]);

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
             let ListaFacultati = facultatiArray.map(facultati => facultati.nume_facultati);
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

     useEffect(() => {
         let ignore = false;

         if (!ignore)  getAllFacultati()
         return () => { ignore = true; }
     },[]);

    return (
        <div href='/grupe'>
            <div className='dropdown'>
                <div className='control'>
                    <div className='selected-value'>Select Facultate</div>
                    <div className='arrow'></div>
                </div>
                <div className='options'>
                    {
                        listaFacultati.map(nume => <div className='option'>{nume.nume_facultate}</div>)
                    }
                    <div className='option'></div>
                </div>
            </div>
        </div>
    )
}

const Grupe = () => {


    return (
        <div style={{ width: 200}}>
            <DropdownFacultati ></DropdownFacultati>
        </div>
    )
}

export default Grupe