import {useState, useEffect, useContext,} from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";
import {Alert, Form, Row, Navbar, Container, NavbarBrand, Nav, Fade, NavLink} from 'react-bootstrap';
import {Link} from "react-router-dom";

const DASHBOARD_URL = '/dashboard';

const Dashboard = () => {
    const [linkClassDate, setLinkClassDate] = useState("datePersonale");
    const [linkClassSituatie, setLinkClassSituatie] = useState("situatieScolara");
    const [clicked, setClicked] = useState(false);

    return (
        <Nav className="navBar">
            <Container>
                <Navbar.Brand href="/dashboard" >
                    <img className="UTCN" src={require('../Styles/utcluj_logo.png')}/>
                </Navbar.Brand>
                <hr/>
                <Nav.Item>
                    <div className={clicked ? "datePersonaleClick linkDash" : linkClassDate}
                              onMouseEnter={() => setLinkClassDate("datePersonaleClick linkDash")}
                              onMouseLeave={() => setLinkClassDate("datePersonale linkDash")}
                              onClick={() => setClicked(true)}
                    >
                        <Link to="#"  className="linkDash">
                            Date Personale
                        </Link>
                        </div>
                </Nav.Item>

                <Nav.Item>
                    <div className={clicked ? "situatieScolara linkDash" : linkClassSituatie}
                         onMouseEnter={() => setLinkClassSituatie("situatieScolaraClick linkDash")}
                         onMouseLeave={() => setLinkClassSituatie("situatieScolara linkDash")}
                         onClick={() => setClicked(true)}
                    >
                        <Link to="#"  className="linkDash">
                            Situatie Scolara
                        </Link>
                    </div>
                </Nav.Item>

            </Container>
        </Nav>

    )
}

export default Dashboard;