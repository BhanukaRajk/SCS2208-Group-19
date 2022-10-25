import React from 'react'
import { Link } from 'react-router-dom'
import icon from './assets/icon.ico'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand px-3" to="/"><img src={icon} alt="ss" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex justify-content-between'>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar