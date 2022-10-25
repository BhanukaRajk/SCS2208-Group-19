import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Link } from 'react-router-dom'
import car1 from '../Home/assets/car1.jpg'
import car2 from '../Home/assets/car2.jpg'
import car3 from '../Home/assets/car3.jpg'
import Login from '../login/Login'

const MechanicDashboard = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        (user.type == 'mechanic') ?
        <div className='container w-75 my-5 d-flex flex-column align-items-center mx-auto'>
            <h1 className='display-5 text-light'>Mechanic Dashboard</h1>
            <br /><br />
            <div className='container d-flex justify-content-around '>
                <div class="card image justify-content-around blur-card">
                    <img class="card-img-top imageS" src={car1} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/mechanic/requests'>
                            <div class="btn btn-primary mx-auto">View client requests</div>
                        </Link>
                    </div>
                </div>
                <div class="card image justify-content-around blur-card">
                    <img class="card-img-top imageS" src={car2} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/repairs/mytasks'>
                            <div class="btn btn-primary mx-auto">View accepted requests</div>
                        </Link>
                    </div>
                </div>
                {/* <div class="card image justify-content-around blur-card">
                    <img class="card-img-top imageS" src={car3} alt="Card image cap" />
                    <div class="card-body d-flex justify-content-around">
                        <Link to='/'>
                            <div class="btn btn-primary mx-auto">View my details</div>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>:<Login/>
    )
}

export default MechanicDashboard