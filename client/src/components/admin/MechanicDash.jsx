import { useState } from 'react'
import axios from 'axios'
import './mechanic.css'

const MechanicDash = () => { 
    const [data, setData] = useState([])
    
    const getData = () => {
        axios.get('http://localhost:3001/mechanic')
            .then((response)=>{
                setData(response.data)
            })
            .catch((error)=>{
                console.log("Error "+error)
            });
    }

  return (
    <div className='container w-50'>
        <button type="button" onClick={getData} className="btn btn-primary">Primary</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Type</th>
                </tr>
            </thead>
            <tbody>
                {data.map(x => (
                    <tr>
                        <th >{x.name}</th>
                        <td>{x.location}</td>
                        <td>{x.email}</td>
                        <td>{x.mobileNo}</td>
                        <td>{x.type.map(y => (<div>{y} <br /></div>))}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default MechanicDash