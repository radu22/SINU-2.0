import {useState, useEffect} from "react";
import axios from "../api/axios";
import {Dropdown} from "react-bootstrap";


const FACULTATI_URL = '/getFacultati';

const Grupe = () => {
     const [errMsg, setErrMsg] = useState('');
     const [shouldRenderSpecializari, setShouldRenderSpecializari] = useState(false);
     const [listaFacultati, setListaFacultati] = useState([]);
     const [selectedFacultate, setSelectedFacultate] = useState("");

     useEffect(() => {
         let ignore = false;

         if (!ignore)  getAllFacultati()
         return () => { ignore = true; }
     },[]);

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

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
<<<<<<< HEAD
             let ListaFacultati = facultatiArray.map(facultati => facultati.nume_facultate);
             setListaFacultati(ListaFacultati);
=======
             console.log(facultatiArray);
             let ListaFacultati = facultatiArray.map(({nume_facultate}) =>
                 nume_facultate,
         );
             console.log(ListaFacultati);
             setListaFacultati(arr => [...arr ,ListaFacultati]);
>>>>>>> 8ffab72ab43c539ca4c4bf8dcbe804c90709444b
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

     console.log(listaFacultati);

    return (
<<<<<<< HEAD
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
=======
        <div href='/grupe' style={{width: 200}}>
    <div className="dropdown">
            <div className='control'>
            <div className='selected-value'>Select Facultate</div>
        <div className='arrow'/>
        </div>
        <div className='options'>
            {
                listaFacultati.map((val,key)  => <div key={key} className='option'>{val} < /div>)
            }
            <div className='option'></div>
>>>>>>> 8ffab72ab43c539ca4c4bf8dcbe804c90709444b
        </div>
    </div>
</div>
    )
}

// const Grupe = ({listaFacultati}) => {
//
//
//     return (
//         <div style={{ width: 200}}>
//             <DropdownFacultati options={listaFacultati} prompt='Select Facultate'/>
//         </div>
//     )
// }

export default Grupe

<<<<<<< HEAD
    return (
        <div style={{ width: 200}}>
            <DropdownFacultati />

        </div>
    )
}

export default Grupe
=======
// <div href='/grupe' style={{width: 200}}>
// <div className="dropdown">
//     <div className='control'>
//     <div className='selected-value'>Select Facultate</div>
// <div className='arrow'/>
// </div>
// <div className='options'>
//     {
//         listaFacultati.map((val,key)  => <div key={key} className='option'>{val} < /div>)
//     }
//     <div className='option'></div>
// </div>
// </div>
// </div>
>>>>>>> 8ffab72ab43c539ca4c4bf8dcbe804c90709444b
