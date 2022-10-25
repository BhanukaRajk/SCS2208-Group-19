import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../UserContext'
import { useContext } from 'react'

const Login = () => {
  const {user, setUser} = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const authLogin = (e) => {
    e.preventDefault()
    if (username !== '' || password !== '')
      axios.post('http://localhost:3001/auth/login', {
        "username": username,
        "password": password
      })
        .then((response) => {
          axios.get('http://localhost:3001/auth/get/' + username)
            .then((res) => {
              setType(res.data.type)
              setUser({
                email: username,
                type: res.data.type
              })
              setMessage(`login successfull - ${user.type}`)
            })
            .catch(err => {
              setMessage(`login Failed`)
              console.log(err.message);
            })
        }).catch((err) => {
          setMessage(`login Failed`)
          console.log(err.message);
        })
    else {
      setMessage(`Enter all data`)
    }
  }

  return (
    <div>
      <form className='container w-25 mt-5 p-5 mb-2 text-white rounded blur-card'>
        <h3>Login</h3>
        {message !== '' && 
        <div className="alert alert-secondary" role="alert">
          {message}
        </div>}
        <hr />
        <div className="form-group mt-2">
          <label >Email address</label>
          <input type="email" className="form-control" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mt-2">
          <label >Password</label>
          <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className="form-check m-2">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary w-100 m-2" onClick={authLogin}>Submit</button>
      </form>
    </div>
  )
}

export default Login