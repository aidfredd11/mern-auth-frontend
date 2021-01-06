import React from 'react'
import AuthOptions from '../auth/AuthOptions';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <Link to="/">
                <h1 className="title">MERN Auth App</h1>
            </Link>
            <AuthOptions/>
        </header>
    )
}
