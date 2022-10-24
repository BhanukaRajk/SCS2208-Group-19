import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const authReg = (e) => {
        e.preventDefault()
        if (username !== '' || password !== '')
            axios.post('http://localhost:3001/auth/register', {
                "username": username,
                "password": password,
            })
                .then((response) => {
                    axios.get('http://localhost:3001/auth/get/' + username)
                        .then((res) => {
                            setType(res.data.type)
                            setMessage(`login successfull - ${res.data.type}`)
                        })
                        .catch(err => {
                            console.log(err.message);
                        })
                }).catch((err) => {
                    console.log(err.message);
                })
        else {
            setMessage(`Enter all data`)
        }
    }

    return (
        <div>
            <form className='container w-25 mt-5 p-5 mb-2  text-white rounded blur-card'>
                <h3>Register</h3>
                <hr />
                <div class="form-group mt-1">
                    <label >Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div class="form-group mt-1">
                    <label >Name</label>
                    <input type="text" class="form-control" placeholder="Enter name" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div class="form-group mt-1">
                    <label >Mobile no</label>
                    <input type="text" class="form-control" placeholder="Enter name" onChange={(e) => { setMobile(e.target.value) }} />
                </div>
                <div class="form-group mt-1">
                    <label >Vehicles</label>
                    <input type="text" class="form-control" placeholder="Enter name" onChange={(e) => { setVehicle(e.target.value) }} />
                </div>
                <small id="emailHelp" class="form-text text-muted">Choose passwords</small>
                <div class="form-group mt-1">
                    <label >Password</label>
                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div class="form-group mt-1">
                    <label >Confirm password</label>
                    <input type="password" class="form-control" placeholder="Password confirm" onChange={(e) => { setPasswordConf(e.target.value) }} />
                </div>
                <button type="submit" class="btn btn-primary m-4" onClick={authReg}>Submit</button>
            </form>
        </div>
    )
}

export default Register