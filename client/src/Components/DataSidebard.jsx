import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import renderSettings from './Settings'

const LOGOUT_URL = '/logout';

const useHandleLogout = async () => {
    const {auth, setAuth} = useAuth();
    try {
        const response = await axios.post(LOGOUT_URL,
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

export default useHandleLogout;

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
            //function: ,
        },

        {
            title: "Log out",
            icon: <LogoutOutlinedIcon />,
            link: "/logout",
            function: useHandleLogout,
        }
];
