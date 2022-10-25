import React from 'react'
import icon from './assets/icon.ico'
import './style.css'

const HomePage = () => {
    return (
        <div>
            <div className='container-fluid py-4 home-content'>
                <div className='d-flex flex-column justify-content-between'>
                    <div className='container d-flex justify-content-center'>
                        <h1 className='text-light display-1'>Service Station</h1>
                    </div>
                    <div className='container d-flex justify-content-center'>

                        <div className='blur-card d-flex flex-column align-items-center text-light p-5 w-75'>
                            <img className="border rounded imgHome my-3" src={icon} alt="" />
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage