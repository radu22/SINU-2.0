import {useState, useEffect, useContext,} from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";
import {Alert, Form, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

const DASHBOARD_URL = '/dashboard';

const Dashboard = () => {

    return (
        <h1>DASHBOARD</h1>

    )
}

export default Dashboard;