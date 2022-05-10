import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";

import {Grid} from "@mui/material";

const PageLayout = () => (
    <Grid container style={{height:"100vh"}}>
        <Grid  item md={4}>
            <Sidebar/>
        </Grid>
        <Grid  item md={8}>
            <Outlet />
        </Grid>
    </Grid>
);

export default PageLayout;