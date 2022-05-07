import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import axios from "../api/axios";

const LOGOUT_URL = '/logout';

const logout = async () => {
    try {
        const response = await axios.get(LOGOUT_URL,
            JSON.stringify({}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: false
            }
        );
    } catch (err) {
        if (!err?.response) {
            console.log(err.response)
        }
    }

}

export default logout;

export const DataSidebar = [
    {
        title: "Date Personale",
        icon: <AccountCircleOutlinedIcon />,
        link: "/datePersonale",
    },

        {
            title: "Situația Școlară",
            icon: <ArticleOutlinedIcon />,
            link: "/situatiaScolara",
        },

        {
            title: "Grupe",
            icon: <SchoolOutlinedIcon />,
            link: "/grupe",
        },

        {
            title: "Orar",
            icon: <EventNoteOutlinedIcon />,
            link: "/orar",
        },

        {
            title: "Materii",
            icon: <MenuBookOutlinedIcon />,
            link: "/materii",
        },

        {
            title: "Setări",
            icon: <SettingsOutlinedIcon />,
            link: "/setari",
        },

        {
            title: "Log out",
            icon: <LogoutOutlinedIcon />,
            link: "/logout",
            function: logout,
        }
];
