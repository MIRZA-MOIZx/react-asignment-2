

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const [state, setState] = useState({ email: "", password: "" })
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    let { email, password } = state

    console.log("email", email)
    console.log("password", password)

    const formData = { email, password }
    console.log("formData", formData)
    navigate("/users")

  }

  return (
    <main className='auth py-5'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-5  mx-auto p-3 p-md-4" style={{ maxWidth: 600 }}>
              <h2 className="text-danger text-center mb-4 fw-bold">Choose the page you want to open</h2>

                  </div>
                </div>
              
            </div>
          </div>
        
      








          <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 250 }}>
              <h2 className="text-danger text-center mb-4 fw-bold"></h2>
              <h3 className='mb-0 mt-2 fw-bold text-center'>  <Link to="/">ToDo Page</Link></h3>

                  </div>
                </div>
              
            </div>
          </div>











          <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4 mt-5" style={{ maxWidth: 250 }}>
              <h2 className="text-danger text-center mb-4 fw-bold"></h2>

                    <h3 className='mb-0  fw-bold text-center'> <Link to="/About">USERS</Link></h3>
                  </div>
                </div>
              
            </div>
          </div>
        
      
        
      





    </main>

    
  )
}
