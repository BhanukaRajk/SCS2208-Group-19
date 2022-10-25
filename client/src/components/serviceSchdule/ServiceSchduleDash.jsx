import { useState, useEffect } from 'react'
import axios from 'axios'
import './serviceSchdule.css'

const ServiceSchduleDash = () => {

    const [data, setServiceSchduleData] = useState([]);
    const [binulaData, setBinulaData] = useState([]);

    const [updateState, setUpdateState] = useState(-1);

    const [clientName, setClientName] = useState("");
    const [clientMobileNumber, setClientMobileNumber] = useState("");
    const [serviceStationName, setServiceStationName] = useState("");
    const [scheduleTime, setScheduleTime] = useState("");



    useEffect(() => {
        getServiceSchdule()
        getName()
    }, [])

    const addServiceSchdule = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/serviceSchedule', {
            "clientName": clientName,
            "clientMobileNo": clientMobileNumber,
            "serviceStation": serviceStationName,
            "scheduleTime": scheduleTime
        })
            .then((response) => {
                console.log(response.data)
                clearForm()
                getServiceSchdule()
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }


    const getName = () => {
        axios.get('http://localhost:3001/mechanic')
            .then((response) => {
                setBinulaData(response.data)
            })
            .catch((error) => {
                console.log("Error " + error)
            });
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

    const clearForm = () => {
        setClientName("")
        setClientMobileNumber("")
        setServiceStationName("")
        setScheduleTime("")
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


    // states for form
    // const [name, setName] = useState(upData.name)



    const updateServiceSchdule = (id) => {
        setUpdateState(id)
        axios.patch('http://localhost:3001/serviceSchedule/' + id, {
            "clientName": clientName,
            "clientMobileNo": clientMobileNumber,
            "serviceStation": serviceStationName,
            "scheduleTime": scheduleTime
        })
            .then((response) => {
                console.log(response.data)
                getServiceSchdule()
                setUpdateState(-1)
                clearForm()
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }


    function handleSubmit (id) {
        setUpdateState(id)
    }


    return (
        <div>
            <div className='container w-100'>
                <br />
                <form className='container w-75'>
                    <div className="mb-3">
                        <label className="form-label" >Client Name</label>
                        <input type="text" className="form-control" onChange={(e) => { setClientName(e.target.value) }} value={clientName} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" >Client Mobile No</label>
                        <input type="text" className="form-control" onChange={(e) => { setClientMobileNumber(e.target.value) }} value={clientMobileNumber} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Service Station</label>

                        <div class="mb-3">
                            <select className="form-select" onChange={(e) => { setServiceStationName(e.target.value) }} value={serviceStationName}>
                                <option value="" selected disabled hidden>Choose a Service Station</option>
                                {
                                    binulaData.map((item) =>
                                        <option>{item.name}</option>
                                    )}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" >Schedule Time</label>
                        <input type="datetime-local" className="form-control" onChange={(e) => { setScheduleTime(e.target.value) }} value={scheduleTime} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={addServiceSchdule}>Submit</button>
                    <button type="button" className="btn btn-warning" onClick={clearForm}>clear</button>
                </form>
                <br /><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Client Name</th>
                            <th scope="col">Client Mobile No</th>
                            <th scope="col">Service Station</th>
                            <th scope="col">Schedule Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) =>
                            updateState === item._id ?
                                <tr>
                                    <td><input type="text" className="form-control" onChange={(e) => { setClientName(e.target.value) }} value={clientName} /></td>
                                    <td><input type="text" className="form-control" onChange={(e) => { setClientMobileNumber(e.target.value) }} value={clientMobileNumber} /></td>
                                    <td><input type="text" className="form-control" onChange={(e) => { setServiceStationName(e.target.value) }} value={serviceStationName} /></td>
                                    <td><input type="datetime-local" className="form-control" onChange={(e) => { setScheduleTime(e.target.value) }} value={scheduleTime} /></td>
                                    <td><button type="submit" className="btn btn-primary" onClick={() => { updateServiceSchdule(item._id) }}>Update</button></td>
                                </tr> :

                                <tr key={item._id}>
                                    <td>{item.clientName}</td>
                                    <td>{item.clientMobileNo}</td>
                                    <td>{item.serviceStation}</td>
                                    <td>{item.scheduleTime}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteServiceSchdule(item._id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleSubmit(item._id)}>Update</button>
                                    </td>
                                </tr>
                        )}


                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ServiceSchduleDash;