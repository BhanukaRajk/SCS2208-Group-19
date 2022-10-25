import { useState, useEffect } from 'react'
import axios from 'axios'
import './serviceSchdule.css'
import ServiceAddForm from './ServiceAddForm';
import ServiceUpdateForm from './ServiceUpdateForm';

const ServiceSchduleDash = () => {

    const [data, setServiceSchduleData] = useState([]);
    const [upDataServiceSchdule, setUpDataServiceSchdule] = useState({});

    // toggler
    const [toggler, setToggler] = useState(0);
    const [updateToggler, setUpdateToggler] = useState(0);


    useEffect(() => {
        getServiceSchdule()
        // getName()

    }, [data]);

    const toggleForm = () => {
        setToggler(toggler ? 0 : 1)
    }



    const getServiceSchdule = () => {
        axios.get('http://localhost:3001/serviceSchedule')
            .then((response) => {
                setServiceSchduleData(response.data)
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }


    const deleteServiceSchdule = (id) => {
        axios.delete('http://localhost:3001/serviceSchedule/' + id)
            .then((response) => {
                console.log(response.data)
                getServiceSchdule()
            })
            .catch((error) => {
                console.log(error)
            })
    }



    // update function
    const updateRow = (singleData) => {
        setUpDataServiceSchdule(singleData)
        setUpdateToggler(1)
    }



    return (
        <div>
            <div className='container w-100'>
                <br />

            
                {toggler === 1 &&
                    <div>
                        <button className='btn btn-primary' onClick={toggleForm}>Show data</button>
                        <ServiceAddForm getServiceSchdule={getServiceSchdule} setToggler={setToggler} />
                    </div>}
                {updateToggler === 1 &&
                    <div>
                        <button className='btn btn-primary' onClick={() => { setUpdateToggler(0) }}>Show data</button>
                        <ServiceUpdateForm
                            getServiceSchdule={getServiceSchdule}
                            setUpdateToggler={setUpdateToggler}
                            upDataServiceSchdule={upDataServiceSchdule} />
                    </div>}

                {(!toggler && !updateToggler) ?
                    <div>
                        <button className='btn btn-primary' onClick={toggleForm}>Add Service</button><br /><br /><br />
                        <h2><b><u>Details of My Schedule</u></b></h2><br />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Client Mobile No</th>
                                    <th scope="col">Service Station</th>
                                    <th scope="col">Schedule Time</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) =>
                                    <tr key={item._id}>
                                        <td>{item.clientName}</td>
                                        <td>{item.clientMobileNo}</td>
                                        <td>{item.serviceStation}</td>
                                        <td>{item.scheduleTime}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteServiceSchdule(item._id)}>Delete</button>
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

export default ServiceSchduleDash;