// MECHANIC
// VIEW CLIENT REQUESTS FROM MECHANICS HOMEPAGE

import React from 'react'
import Axios from 'axios'
import AcceptRequest from './AcceptRequest'
import MyTasks from './MyTasks'
import './repairs.css'

const ViewRequests = () => {

    const [data, setData] = React.useState([])
    const [upData, setUpData] = React.useState({});
    const [toggler, setToggler] = React.useState(0);
    const [updateToggler, setUpdateToggler] = React.useState(0);

    const toggleForm = () => {
        setToggler(toggler ? 0 : 1)
    }

    React.useEffect(() => {
        getData()
    }, [data])

    const getData = () => {
        Axios.get('http://localhost:3001/repair/client/Binula')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("AN ERROR OCCURRED! \n" + err)
            });
    }

    const updateRow = (Record) => {
        setUpData(Record)
        setUpdateToggler(1)
    }

    return (
        <div className='container w-100'>
            <br />
            {toggler == 1 &&
                <div>
                    <button className='btn btn-primary' onClick={toggleForm}>Show data</button>
                    <AcceptRequest getData={getData} setToggler={setToggler} />
                </div>}
            {updateToggler == 1 &&
                <div>
                    <button className='btn btn-primary' onClick={() => { setUpdateToggler(0) }}>Show data</button>
                    <MyTasks
                        getData={getData}
                        setUpdateToggler={setUpdateToggler}
                        upData={upData} />
                </div>}

            {(!toggler && !updateToggler) ?
                <div>
                    <table className="table table-hover">
                        <thead class="table-light">
                            <tr>
                                {/* CLIENT'S DATA */}
                                <th scope="col">Location</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Model</th>

                                {/* ACCEPT BUTTON */}
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((record) =>
                                <tr key={record.client_name}>
                                    <td>{record.location}</td>
                                    <td>{record.client_mobile}</td>
                                    <td>{record.vehicle_model}</td>


                                    <td><button className="btn btn-primary" onClick={() => { updateRow(record) }}>
                                        Accept</button></td>

                                </tr>

                            )}
                        </tbody>
                    </table>
                </div> : <div></div>}
        </div>
    )
}

export default ViewRequests