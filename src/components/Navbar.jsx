import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/Signup');
    }

    const handleSignin = () => {
        navigate('/Signin');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
            <img id='navbar_image' src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745844628/Female_User_Icon_meurjt.png" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Register
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={handleSignUp} href="#">Sign up</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" onClick={handleSignin} href="#">Sign In</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar