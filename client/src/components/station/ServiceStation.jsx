import { useState, useEffect } from 'react'
import axios from 'axios'
import StationAddForm from './StationAddForm';
import StationUpdateForm from './StationUpdateForm';


import React from 'react';


const ServiceStation = () => {

    const [data, setStation] = useState([]);
    const [updateStation, setUpDataStation] = useState({});

    // toggler
    const [toggler, setToggler] = useState(0);
    const [updateToggler, setUpdateToggler] = useState(0);


    useEffect(() => {
        getServiceStation()

    }, [data]);

    const toggleForm = () => {
        setToggler(toggler ? 0 : 1)
    }



    const getServiceStation = () => {
        axios.get('http://localhost:3001/station')
            .then((response) => {
                setStation(response.data)
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }


    const deleteServiceStation = (id) => {
        axios.delete('http://localhost:3001/station/' + id)
            .then((response) => {
                console.log(response.data)
                getServiceStation()
            })
            .catch((error) => {
                console.log(error)
            })
    }



    // update function
    const updateRow = (singleData) => {
        setUpDataStation(singleData)
        setUpdateToggler(1)
    }



    return (
        <div>
            <div className='container w-100'>
                <br />


                {toggler === 1 &&
                    <div>
                        <button className='btn btn-primary' onClick={toggleForm}>Show data</button>
                        <StationAddForm getServiceStation={getServiceStation} setToggler={setToggler} />
                    </div>}
                {updateToggler === 1 &&
                    <div>
                        <button className='btn btn-primary' onClick={() => { setUpdateToggler(0) }}>Show data</button>
                        <StationUpdateForm
                            getServiceStation={getServiceStation}
                            setUpdateToggler={setUpdateToggler}
                            upDataServiceSchdule={updateStation} />
                    </div>}
                {(!toggler && !updateToggler) ?
                    <div>
                        <button className='btn btn-warning' onClick={toggleForm}>Add Service Station</button><br /><br /><br />
                        <table className="table text-light blur-card">
                            <thead>
                                <tr>
                                    <th scope="col">Service Station Name</th>
                                    <th scope="col">Hotline Number</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) =>
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteServiceStation(item._id)}>Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => { updateRow(item) }}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div> : <div></div>}

            </div>
        </div>
    );
};

export default ServiceStation;