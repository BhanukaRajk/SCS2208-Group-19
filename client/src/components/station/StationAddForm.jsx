import React from 'react'
import { useState } from 'react'
import axios from 'axios'




const StationAddForm = ({ getServiceStation, setToggler }) => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");


    const addServiceStation = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/station/", {
            "name": name,
            "mobile": mobile,
            "email": email,
        })
            .then((response) => {
                console.log(response.data)
                getServiceStation()
                clearForm()
                setToggler(0)

            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }



    // Clear the form
    const clearForm = () => {
        setName("")
        setMobile("")
        setEmail("")
    }


    return (
        <div>

            <form className='container w-75'>
                <div className="mb-3">
                    <label className="form-label" >Service Station Name</label>
                    <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} value={name} />
                </div>

                <div className="mb-3">
                    <label className="form-label" >Hotline Number</label>
                    <input type="text" className="form-control" onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
                </div>


                <div className="mb-3">
                    <label className="form-label" >Email Address</label>
                    <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                </div>


                <button type="submit" className="btn btn-primary" onClick={addServiceStation}>Submit</button>
            </form>
        </div>
    );
};

export default StationAddForm;