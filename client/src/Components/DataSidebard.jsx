import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const DataSidebarStudent = [
    {
        title: "Date Personale",
        icon: <AccountCircleOutlinedIcon/>,
        link: "/datePersonale",
    },

    {
        title: "Situația Școlară",
        icon: <ArticleOutlinedIcon/>,
        link: "/situatiaScolara",
    },

    {
        title: "Grupe",
        icon: <SchoolOutlinedIcon/>,
        link: "/grupe",
    },

    {
        title: "Orar",
        icon: <EventNoteOutlinedIcon/>,
        link: "/orar",
    },

    {
        title: "Materii",
        icon: <MenuBookOutlinedIcon/>,
        link: "/materii",
    },

    {
        title: "Setări",
        icon: <SettingsOutlinedIcon/>,
        link: "/setari",
    },

    {
        title: "Log out",
        icon: <LogoutOutlinedIcon/>,
        link: "/logout",
    }
];
export const DataSidebarProfesor = [
    {
        title: "Adauga student",
        icon: <AccountCircleOutlinedIcon/>,
        link: "/insertStudent",
    },

    {
        title: "Note",
        icon: <ArticleOutlinedIcon/>,
        link: "/note",
    },

    {
        title: "Log out",
        icon: <LogoutOutlinedIcon/>,
        link: "/logout",
    }
];
