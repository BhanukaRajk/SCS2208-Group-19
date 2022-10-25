import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios';

const ServiceUpdateForm = ({ getServiceSchdule, setUpdateToggler, upDataServiceSchdule }) => {
    // states for form
    const [clientname, setClientname] = useState(upDataServiceSchdule.clientName);
    const [clientmobileno, setClientmobileno] = useState(upDataServiceSchdule.clientMobileNo);
    const [servicestation, setServicestation] = useState(upDataServiceSchdule.serviceStation);
    const [servicetime, setServicetime] = useState(upDataServiceSchdule.scheduleTime);

    const [binulaData, setBinulaData] = useState([]);


    useEffect(() => {
        getName()

    },[]);

    const updateServiceSchdule = (event) => {
        event.preventDefault()
        axios.patch('http://localhost:3001/serviceSchedule/' + upDataServiceSchdule._id, {
            "clientName": clientname,
            "clientMobileNo": clientmobileno,
            "serviceStation": servicestation,
            "scheduleTime": servicetime
        })
            .then((response) => {
                console.log(response.data)
                clearForm()
                getServiceSchdule()
                setUpdateToggler(0)
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

    // Clear the form
    const clearForm = () => {
        setClientname("")
        setClientmobileno("")
        setServicestation("")
        setServicetime("")
    }

    return (
        <div>
            <form className='container w-75'>
                <div className="mb-3">
                    <label className="form-label" >Client Name</label>
                    <input type="text" className="form-control" onChange={(e) => { setClientname(e.target.value) }} value={clientname} />
                </div>

                <div className="mb-3">
                    <label className="form-label" >Client Mobile No</label>
                    <input type="text" className="form-control" onChange={(e) => { setClientmobileno(e.target.value) }} value={clientmobileno} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Service Station</label>

                    <div class="mb-3">
                        <select className="form-select" onChange={(e) => { setServicestation(e.target.value) }} value={servicestation}>
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
                    <input type="text" className="form-control" onChange={(e) => { setServicetime(e.target.value) }} value={servicetime} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={updateServiceSchdule}>Update</button>
            </form>
        </div>
    );
};

export default ServiceUpdateForm;