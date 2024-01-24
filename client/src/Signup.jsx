import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result)
        Navigate('/login')
      })
      .catch(err => console.log(err))
  }

  return (

    <div className="form-modal">

      <div className="form-toggle">
        <Link to="/login"><button id="signup-toggle">Login</button></Link>
        <button id="login-toggle" style={{background: '#57b846' , color: '#ffff'}}>Sign up</button>
      </div>

      <div id="signup-form">
      <div className="form-toggle">
          <h2>Signup</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email"
            placeholder='Enter your email'
            autoComplete='off'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text"
            placeholder='Enter username'
            autoComplete='off'
            name='Email'
            onChange={(e) => setName(e.target.value)}
          />
          <input type="password"
            placeholder='Create Password'
            autoComplete='off'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn signup">create account</button>
          <p>Clicking <strong>create account</strong> means that you are agree to our <span>terms of services</span>.</p>
        </form>
      </div>

    </div>
























    //  <div>
    //   <form onSubmit={handleSubmit}>
    //   <div>
    //       Name
    //       <input type="text" 
    //       placeholder='Enter Name'
    //       autoComplete='off'
    //       name='Email'
    //       onChange={(e) => setName(e.target.value)}
    //       />
    //   </div>
    //   <div>
    //       email
    //       <input type="email" 
    //       placeholder='Enter email'
    //       autoComplete='off'
    //       name='email'
    //       onChange={(e) => setEmail(e.target.value)}
    //       />
    //   </div>
    //   <div>
    //       password
    //       <input type="password" 
    //       placeholder='Enter Password'
    //       autoComplete='off'
    //       name='password'
    //       onChange={(e) => setPassword(e.target.value)}
    //       />
    //   </div>

    //   <button>Rigister</button>
    //   </form>

    //   <Link to="/login">Login</Link>
    //  </div>
  )
}

export default Signup
