import axios from "../api/axios";
import Sidebar from "./Sidebar";
import {Button} from "@mui/material";
import useAuth from "../hooks/useAuth";
import {Outlet} from "react-router";
import {Container} from "react-bootstrap";



const Dashboard = ({children}) => {

    return (
        <>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default Dashboard;