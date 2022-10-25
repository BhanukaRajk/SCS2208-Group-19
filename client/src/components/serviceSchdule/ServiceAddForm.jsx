import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ServiceAddForm = ({ getServiceSchdule, setToggler }) => {

    const [clientName, setClientName] = useState("");
    const [clientMobileNumber, setClientMobileNumber] = useState("");
    const [serviceStationName, setServiceStationName] = useState("");
    const [scheduleTime, setScheduleTime] = useState("");

    const [binulaData, setBinulaData] = useState([]);

    useEffect(() => {
        getName()

    }, []);


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
                setToggler(0)

            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }

    const getName = () => {
        axios.get('http://localhost:3001/client')
            .then((response) => {
                setBinulaData(response.data)
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }


    // Clear the form
    const clearForm = () => {
        setClientName("")
        setClientMobileNumber("")
        setServiceStationName("")
        setScheduleTime("")
    }


    return (
        <div>
            
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
        </div>
    );
};

export default ServiceAddForm;