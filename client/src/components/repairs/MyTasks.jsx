// MECHANIC
// MECHANIC'S ACCEPTED REQUESTS VIEW

import React from 'react'
import Axios from 'axios'
import AddRequest from './AddRequest'
import UpdateRequest from './UpdateRequest'


const AcceptedReqs = () => {

    const [data, setData] = React.useState([])
    const [upData, setUpData] = React.useState({});
    const [toggler, setToggler] = React.useState(0);
    const [updateToggler, setUpdateToggler] = React.useState(0);

    const toggleForm = () => {
        setToggler(toggler ? 0 : 1)
    }

    React.useEffect(() => {
        showData()
    }, [data])

    const showData = () => {
        Axios.get('http://localhost:3001/repair/client/Binula')
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log("AN ERROR OCCURRED! \n" + error)
            });
    }


    const updateRow = (singleData) => {
        setUpData(singleData)
        setUpdateToggler(1)
        // console.log(upData)
    }

    const completeReq = (id) => {
        Axios.delete('http://localhost:3001/repair/' + id)
            .then((res) => {
                console.log(res.data)
                setData(data => data.filter((row) => row._id !== id))
            })
            .catch((error) => {
                console.log("AN ERROR OCCURRED! \n" + error)
            })
    }


    return (
        <div className='container w-100'>
            <br />
            {toggler === 1 &&
                <div>
                    <button className='btn btn-primary' onClick={toggleForm}>Show data</button>
                    <AddRequest showData={showData} setToggler={setToggler} />
                </div>}
            {updateToggler === 1 &&
                <div>
                    <button className='btn btn-primary' onClick={() => { setUpdateToggler(0) }}>Show data</button>
                    <UpdateRequest
                        showData={showData}
                        setUpdateToggler={setUpdateToggler}
                        upData={upData} />
                </div>}

            {(!toggler && !updateToggler) ?
                <div>
                    <table className="table table-hover">
                        <thead class="table-light">
                            <tr>
                                {/* CLIENT'S DATA */}
                                <th scope="col">Client Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Model</th>

                                {/* ACCEPTED MECHANIC'S DATA */}
                                <th scope="col">Time</th>

                                {/* EDIT BUTTON */}
                                <th scope="col"></th>
                                {/* COMPLETE/REMOVE BUTTON */}
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((record) =>
                                <tr key={record._id}>
                                    <td>{record.client_name}</td>
                                    <td>{record.location}</td>
                                    <td>{record.client_mobile}</td>
                                    <td>{record.vehicle_model}</td>
                                    <td>{record.acceptance.added_date}</td>

                                    <td><button className="btn btn-primary" onClick={() => { updateRow(record) }}>
                                        Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => { completeReq(record.id) }}>
                                        Complete</button></td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div> : <div></div>}
        </div>
    )
}

export default AcceptedReqs;