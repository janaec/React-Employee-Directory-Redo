mport React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

    render() {
        const style= {
            backgroundColor: "pink",
            opacity: "50%",
            color: "grey",
            textAlign: "center",
            height: "100px",
            fontFamily: "noto serif JP"
        }
        return (
            <div>
            <h1 style={style}>Employee Directory</h1>
            </div>
        )
    }
}

export default Header;