import { useState, useEffect } from 'react'
import axios from 'axios'
import './serviceSchdule.css'

const ServiceSchduleDash = () => {

    const [data, setServiceSchduleData] = useState([]);
    const [binulaData, setBinulaData] = useState([]);

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
                        <input type="text" className="form-control" onChange={(e) => { setServiceStationName(e.target.value) }} value={serviceStationName} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Schedule Time</label>
                        <input type="text" className="form-control" onChange={(e) => { setScheduleTime(e.target.value) }} value={scheduleTime} />
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
                            <tr key={item._id}>
                                <td>{item.clientName}</td>
                                <td>{item.clientMobileNo}</td>
                                <td>{item.serviceStation}</td>
                                <td>{item.scheduleTime}</td>
                            </tr>
                        )}

                        {binulaData.map((item) =>
                            <tr key={item._id}>
                                <td>{item.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceSchduleDash;