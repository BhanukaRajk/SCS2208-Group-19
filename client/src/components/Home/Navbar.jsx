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
                                <Link to='/admin/dashboard'><div className="nav-link" >Admin</div></Link>
                            </li>
                            <li className="nav-item px-3">
                                 <Link to='/client/dashboard'><div className="nav-link" >Client</div></Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to='/mechanic/dashboard'><div className="nav-link" >Mechanic</div></Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to='/register'><div className="nav-link" >Register</div></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar