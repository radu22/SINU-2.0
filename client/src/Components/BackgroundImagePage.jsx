import React from "react";
import "../Styles/styles.css"


const BackgroundImagePage = ({children}) => {
    return (
        <div className="bg">
            {children}
        </div>
    );
}

export default BackgroundImagePage;