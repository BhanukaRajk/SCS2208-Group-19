import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import car4 from './assets/car4.jpg'
import car5 from './assets/car5.jpg'
import car6 from './assets/car6.jpg'
import car7 from './assets/car7.jpg'
import { UserContext } from '../../UserContext'
import { useState } from 'react'
import Login from '../login/Login'

const ClientDashboard = () => {
    const {user,setUser} = useContext(UserContext);
    return (
        (user.type=='client')?
        <div className='container w-75 my-5 d-flex flex-column align-items-center mx-auto'>
            <h1 className='display-5 text-light'>{user.type}</h1>
            <br /><br />
            <div className='container d-flex flex-wrap justify-content-around '>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car4} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                            <Link to='/ClientServiceScduleAdd'>
                            <div class="btn btn-dark mx-auto">Add service request</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car5} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/client/myrequests/add'>
                            <div class="btn btn-dark mx-auto">Breakdown request</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car6} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/client/myrequests'>
                            <div class="btn btn-dark mx-auto">My breakdown requests</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car7} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                            <Link to='/ServiceStationSchduleView'>
                            <div class="btn btn-dark mx-auto">My service requests</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>:<Login />
    )
}

export default ClientDashboard;