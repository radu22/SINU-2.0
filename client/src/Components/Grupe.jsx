import {useState, useEffect} from "react";
import axios from "../api/axios";


const FACULTATI_URL = '/getFacultati';

const Grupe = () => {
     const [errMsg, setErrMsg] = useState('');
     const [listaFacultati, setListaFacultati] = useState([]);

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
             console.log(facultatiArray);
             let ListaFacultati = facultatiArray.map(({nume_facultate}) =>
                 nume_facultate,
         );
             console.log(ListaFacultati);
             setListaFacultati(arr => [...arr ,ListaFacultati]);
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

     console.log(listaFacultati);

    return (
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