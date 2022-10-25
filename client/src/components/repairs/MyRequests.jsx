// CLIENT
// REQUESTS SENT BY ME

import React from 'react'
import Axios from 'axios'
// import AddRequest from './AddRequest'
import UpdateRequest from './UpdateRequest'
import './repairs.css'
import { Link } from 'react-router-dom'

const ReqByMe = () => {

    const [data, setData] = React.useState([])
    const [upData, setUpData] = React.useState({});
    // const [toggler, setToggler] = React.useState(0);
    const [updateToggler, setUpdateToggler] = React.useState(0);

    // const toggleForm = () => {
    //     setToggler(toggler ? 0 : 1)
    // }

    React.useEffect(() => {
        getData()
    }, [data])

    const getData = () => {
        Axios.get('http://localhost:3001/repair/client/Sugatha')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("AN ERROR OCCURRED! \n" + err)
            });
    }

    const removeRow = (id) => {
        Axios.delete('http://localhost:3001/repair/' + id)
            .then((res) => {
                console.log(res.data)
                setData(data => data.filter((item) => item._id != id))
            })
            .catch((err) => {
                console.log("AN ERROR OCCURRED! \n" + err)
            })
    }

    const updateRow = (Record) => {
        setUpData(Record)
        setUpdateToggler(1)
    }

    return (
        <div className='container w-100'>
            <br />
            {/* {toggler == 1 &&
                <div>
                    <button className='btn btn-dark' onClick={toggleForm}>Add new request</button>
                    <AddRequest getData={getData} setToggler={setToggler} />
                </div>} */}
            {updateToggler == 1 &&
                <div>
                    <button className='btn btn-dark' onClick={() => { setUpdateToggler(0) }}>Show data</button>
                    <UpdateRequest
                        showData={getData}
                        setUpdateToggler={setUpdateToggler}
                        thisOne={upData} />
                </div>}

            {(!updateToggler) ?
                <div>
                    <Link to="/client/dashboard">
                        <button className='btn btn-light m-4' type='button'>Dashboard</button>
                    </Link>
                    <Link to="/client/myrequests/add">
                        <button className='btn btn-light m-4' type='button'>Add request</button>
                    </Link>
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
                                <th scope="col"></th>
                                {/* REMOVE BUTTON */}
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody className='text-light'>
                            {data.map((record) =>
                                <tr key={record.client_name}>
                                    <td>{record.location}</td>
                                    <td>{record.client_mobile}</td>
                                    <td>{record.vehicle_model}</td>

                                    <td>{record.acceptance.acceptedby}</td>
                                    <td>{record.acceptance.mechanic_mobile}</td>
                                    <td>{record.acceptance.added_date}</td>

                                    <td><button className="btn btn-primary" onClick={() => { updateRow(record) }}>
                                        Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => { removeRow(record._id) }}>
                                        Remove</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div> : <div></div>}
        </div>
    )
}

export default ReqByMe;