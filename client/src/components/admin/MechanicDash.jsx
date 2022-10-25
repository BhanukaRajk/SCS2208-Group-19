import { useState, useEffect } from 'react'
import DelButton from './DelButton'
import axios from 'axios'
import './mechanic.css'
import MechanicAddForm from './MechanicAddForm'
import MechanicUpdateForm from './MechanicUpdateForm'

const MechanicDash = () => {

    // data set
    const [data, setData] = useState([])
    const [upData, setUpData] = useState({});

    // toggler
    const [toggler, setToggler] = useState(0);
    const [updateToggler, setUpdateToggler] = useState(0);

    // load data in reload
    useEffect(() => {
        getData()
    }, [data])


    const toggleForm = () => {
        setToggler(toggler ? 0 : 1)
    }

    // Get all data from server
    const getData = () => {
        axios.get('http://localhost:3001/mechanic')
            .then((response) => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log("Error " + error)
            });
    }

    // to delete a data
    const deleteRow = (id) => {
        axios.delete('http://localhost:3001/mechanic/' + id)
            .then((response) => {
                console.log(response.data)
                setData(data => data.filter((x) => x._id != id))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // update function
    const updateRow = (singleData) => {
        setUpData(singleData)
        setUpdateToggler(1)
        // console.log(upData)
    }

    return (
        <div className='container w-100'>
            <br />
            {toggler == 1 &&
                <div>
                    <button className='btn btn-primary' onClick={toggleForm}>Show data</button>
                    <MechanicAddForm getData={getData} setToggler={setToggler} />
                </div>}
            {updateToggler == 1 &&
                <div>
                    <button className='btn btn-primary' onClick={() => { setUpdateToggler(0) }}>Show data</button>
                    <MechanicUpdateForm
                        getData={getData}
                        setUpdateToggler={setUpdateToggler}
                        upData={upData} />
                </div>}

            {(!toggler && !updateToggler) ?
                <div className='text-light'>
                    <div className='d-flex justify-content-between px-5'>
                        <h1>Mechanic data</h1>
                        <button className='btn btn-success' onClick={toggleForm}>Add data</button>
                    </div>
                    <table className="table blur-card mt-5  rounded">
                        <thead>
                            <tr className='text-light p-3'>
                                <th scope="col">name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Type</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className='text-light'>
                            {data.map((x) =>
                                <tr key={x._id}>
                                    <th >{x.name}</th>
                                    <td>{x.location}</td>
                                    <td>{x.email}</td>
                                    <td>{x.mobileNo}</td>
                                    <td>{x.type.map(y => <div key={y}>{y}<br /></div>)}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { updateRow(x) }}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <DelButton click={deleteRow} id={x._id} />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div> : <div></div>}
        </div>
    )
}

export default MechanicDash