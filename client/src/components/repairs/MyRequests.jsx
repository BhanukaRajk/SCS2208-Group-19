import { useState, useEffect } from 'react'
import axios from 'axios'

const MyRequests = () => {

    const [data, setData] = useState([])

    // const [name, setName] = useState("")
    // const [location, setLocation] = useState("")
    // const [email, setEmail] = useState("")
    // const [mobile, setMobile] = useState("")
    // const [type, setType] = useState("")

    useEffect(() => {
        getData()
    } , [])

    const getData = () => {
        axios.get('http://localhost:3001/repair/client/Binula')/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }

    

    // const addData = (event) => {
    //     event.preventDefault()
    //     axios.post('http://localhost:3001/mechanic', {
    //         "Name" : name,
    //         "Location" : location,
    //         "Email" : email,
    //         "MobileNo" : mobile,
    //         "Type" : type
    //     })
    //     .then((response) => {
    //         console.log(response.data)
    //         clearForm()
    //         getData()
    //     })
    //     .catch((error) => {
    //         console.log("Error " + error)
    //     });
        
    // }

    // const clearForm = () => {
    //     setName("")
    //     setLocation("")
    //     setEmail("")
    //     setMobile("")
    //     setType("")
    // }

    return (
        <div>
            <table className="table table-hover">
                <thead class="table-light">
                    <tr>
                        {/* CLIENT'S DATA */}
                        <th scope="col">Location</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Model</th>

                        {/* ACCEPTED MECHANIC'S DATA */}
                        <th scope="col">Accepted by</th>
                        <th scope="col">Mechanic mobile</th>
                        <th scope="col">Date</th>

                        {/* EDIT BUTTON */}
                        <th scope="col">Edit</th>
                        {/* REMOVE BUTTON */}
                        <th scope="col">Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((record) =>
                        <tr key={record.client_name}>
                            <td>{record.location}</td>
                            <td>{record.client_mobile}</td>
                            <td>{record.vehicle_model}</td>

                            <td>{record.acceptance.acceptedby}</td>
                            <td>{record.acceptance.mechanic_mobile}</td>
                            <td>{record.acceptance.added_date}</td>
                                                        
                            <td><button className="btn btn-warning">Edit</button></td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MyRequests