import React from 'react'
import { Link } from 'react-router-dom'
import car1 from './assets/car1.jpg'
import car4 from './assets/car4.jpg'
import car5 from './assets/car5.jpg'
import car6 from './assets/car6.jpg'
import car7 from './assets/car7.jpg'

const ClientDashboard = () => {
    return (
        <div className='container w-75 my-5 d-flex flex-column align-items-center mx-auto'>
            <h1 className='display-5 text-light'>Admin Dashboard</h1>
            <br /><br />
            <div className='container d-flex flex-wrap justify-content-around '>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car1} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-dark mx-auto">Add Mechanic</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car5} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-dark mx-auto">Add service station</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car6} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-dark mx-auto">View Mechanic</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car7} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-dark mx-auto">View Service Startion</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card my-3">
                    <img class="card-img-top imageS" src={car4} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-dark mx-auto">View Client</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDashboard;