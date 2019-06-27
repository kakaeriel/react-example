import logo from '../assets/img/logo.png';
import React, {Component} from "react";

class Logo extends Component {

    render() {
        return <img src={logo} className="w-75 p-5 center" alt="Logo"/>
    }
}

export default Logo
