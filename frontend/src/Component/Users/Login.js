import React, { useState } from 'react'
import './Register.css'
import { useDispatch } from 'react-redux';
 import { Link, useNavigate } from 'react-router-dom';
import { findUser } from '../Redux/Action';
function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch()

    const { email, password } = formData
    console.log(formData)
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const navigate = useNavigate()
    const Log_user = async () => {
        dispatch(findUser(formData), navigate('/'))
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
                                Login <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>

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

                                        <div className="form-outline mb-4">
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
                                        {/* Checkbox */}

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mb-4"
                                            onClick={Log_user}
                                        >
                                            Login
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>Or <Link to={'/users'}>Register</Link> </p>
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

export default Login