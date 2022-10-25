import React from 'react'
import { useState } from 'react'
import axios from 'axios';



const StationUpdateForm = ({ getServiceStation, setUpdateToggler, upDataServiceSchdule }) => {
    // states for form
    const [name, setStationname] = useState(upDataServiceSchdule.name);
    const [mobile, setStationmobileno] = useState(upDataServiceSchdule.mobile);
    const [email, setStationemail] = useState(upDataServiceSchdule.email);


    const updateServiceSchdule = (event) => {
        event.preventDefault()
        axios.patch('http://localhost:3001/station/' + upDataServiceSchdule._id, {
            "name": name,
            "mobile": mobile,
            "email": email,
        })
            .then((response) => {
                console.log(response.data)
                clearForm()
                getServiceStation()
                setUpdateToggler(0)
            })
            
            .catch((error) => {
                console.log("Error " + error)
            });
    }


    // Clear the form
    const clearForm = () => {
        name("")
        mobile("")
        email("")
    }

    return (
        <div>
            <div>
                <form className='container w-75'>
                    <div className="mb-3">
                        <label className="form-label" >Service Station Name</label>
                        <input type="text" className="form-control" onChange={(e) => { setStationname(e.target.value) }} value={name} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" >Hotline Number</label>
                        <input type="text" className="form-control" onChange={(e) => { setStationmobileno(e.target.value) }} value={mobile} />
                    </div>


                    <div className="mb-3">
                        <label className="form-label" >Email Address</label>
                        <input type="text" className="form-control" onChange={(e) => { setStationemail(e.target.value) }} value={email} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={updateServiceSchdule}>Update</button>
                </form>
            </div>
        </div>
    );
};

export default StationUpdateForm;