import React, { useState } from 'react'
import './Register.css'
import {  useDispatch } from 'react-redux';
import { AddUser } from '../Redux/Action';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register_user() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {name, email,password,password2} = formData
  console.log(formData)
  const onChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }

  
  const Add_user=async()=>{
    dispatch(AddUser(formData,navigate))
    const res = axios
        .post('http://localhost:5668/users/sendEmailAdmin',{email})
        .then((res)=>alert(res.data.message))
    
  }
  return ( 
 
    <>
      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
               Create <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  a new account
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
                ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                    
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="name"
                            name='name'
                            className="form-control"
                            placeholder="First name"
                            required
                            onChange={onChange}

                          />

                        </div>
                       
                      
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name='email'
                        id="email"
                        className="form-control"
                        placeholder="E-mail"
                        required
                        onChange={onChange}
                      />

                    </div>
                    {/* Password input */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="Password"
                            className="form-control"
                            placeholder="Password"
                            name='password'
                            required
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="confirmePassword"
                            className="form-control"
                            placeholder="Confirm password"
                            name='password2'
                            required
                            onChange={onChange}
                          />
                        </div>
                      </div>

                    </div>
                    {/* Checkbox */}

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={ Add_user}
                    >
                      Register
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or       <Link to={'/user/login'}>sign up</Link></p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>


  )
}

export default Register_user