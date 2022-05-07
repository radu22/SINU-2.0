import {useState, useEffect, useContext,} from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";
import {Alert, Form, Row, Navbar, Container, NavbarBrand, Nav, Fade, NavLink} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

const DASHBOARD_URL = '/dashboard';

const Dashboard = () => {

    return (
        <Sidebar>

        </Sidebar>

    )
}

export default Dashboard;