import "../Styles/Sidebar.css"
import {DataSidebar} from './DataSidebard'
import {Link} from "react-router-dom";
import {Alert, Form, Row, Navbar, Container, NavbarBrand, Nav, Fade, NavLink} from 'react-bootstrap';

const Sidebar = () => {
    return (

        <div className="sidebar">
                     <Navbar.Brand href="/sidebar">
                         <img className="UTCN" src={require('../Styles/utcluj_logo.png')}/>
                    </Navbar.Brand>
            <ul className="SidebarList">
                {DataSidebar.map((val, key)=> {
                    return (
                        <li
                            key={key}
                            className="roow"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() =>{window.location.pathname = val.link}}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>

                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar

// <Navbar.Brand href="/sidebar">
//     <img className="UTCN" src={require('../Styles/utcluj_logo.png')}/>
// </Navbar.Brand>

// {Object.values(DataSidebar).map(item => {
//     return (
//         <li >
//             <Link to={item.link}>
//                 {item.icon}
//                 <span>{item}</span>
//             </Link>
//         </li>
//     );
// })}