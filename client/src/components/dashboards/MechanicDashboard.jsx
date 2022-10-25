import React from 'react'
import { Link } from 'react-router-dom'
import car1 from '../Home/assets/car1.jpg'
import car2 from '../Home/assets/car2.jpg'
import car3 from '../Home/assets/car3.jpg'

const MechanicDashboard = () => {
    return (
        <div className='container w-75 my-5 d-flex flex-column align-items-center mx-auto'>
            <h1 className='display-5 text-light'>Mechanic Dashboard</h1>
            <br /><br />
            <div className='container d-flex justify-content-around '>
                <div class="card image justify-content-around blur-card">
                    <img class="card-img-top imageS" src={car1} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-primary mx-auto">View client requests</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card">
                    <img class="card-img-top imageS" src={car2} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-primary mx-auto">View client requests</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card">
                    <img class="card-img-top imageS" src={car3} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-primary mx-auto">View my details</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MechanicDashboard