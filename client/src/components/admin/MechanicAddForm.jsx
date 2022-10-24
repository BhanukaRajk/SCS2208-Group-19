import React from 'react'
import { useState} from 'react'
import axios from 'axios'

const MechanicAddForm = ({ getData, setToggler }) => {
    // states for form
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [type, setType] = useState("")

    // Add data to the server
    const addData = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/mechanic', {
            "Name": name,
            "Location": location,
            "Email": email,
            "MobileNo": mobile,
            "Type": type
        })
            .then((response) => {
                console.log(response.data)
                clearForm()
                getData()
                setToggler(0)
            })
            .catch((error) => {
                console.log("Error " + error)
            });

    }


    // Clear the form
    const clearForm = () => {
        setName("")
        setLocation("")
        setEmail("")
        setMobile("")
        setType("")
    }
  return (
    <div>
          <form className='container w-75'>
              <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} value={name} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" onChange={(e) => { setLocation(e.target.value) }} value={location} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Mobile no</label>
                  <input type="text" className="form-control" onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
              </div>
              <div className="mb-3">
                  <label className="form-label">Type</label>
                  <input type="text" className="form-control" onChange={(e) => { setType(e.target.value) }} value={type} />
              </div>

              <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button>
              <button type="button" className="btn btn-warning" onClick={clearForm}>clear</button>
          </form>
          <br /><br />
    </div>
  )
}

export default MechanicAddForm