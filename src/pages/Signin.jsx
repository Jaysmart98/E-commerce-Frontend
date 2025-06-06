import React, { useState, useEffect } from 'react';
// import log from "../../../assets/log.jpg";
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link, useNavigate,  } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Signin = () => {
    const [message, setMessage] = useState(''); // State for messages
    const [isLoading, setIsLoading] = useState(false); 
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const navigate = useNavigate();   

     const url = "http://localhost:5150/user/signin" // Replace with your API URL

    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
 
        onSubmit: (values) => {
            setIsLoading(true);
            console.log(values);
            axios.post(url, values)
                .then((res) => {
                    console.log(res);
                    Swal.fire("Login Successful");
                    navigate("/dashboard")
                    localStorage.setItem('token', res.data.token); 
                })
                .catch((err) => {
                    console.log(err.response);
                    setMessage(err.response?.data.message || 'An error occurred'); 
                })
                .finally(() => {
                    setIsLoading(false);
                })
        },

        validationSchema: yup.object({
            
            Email: yup.string().required("Email is required"),
            Password: yup
                .string()
                .required("Password is required")
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
                    "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character"
                ),
        }),
    });

    useEffect(() => {
        if (message) {
            setTimeout(() => {
            setMessage('');
            }, 3000); 
        }
    }, [message]);

    return (
        <>
         <Navbar/>
            <div className="wrapper login-3 ">
                <div className="container d-flex " style={{ marginTop: "160px" }}>
                     <div className="col-left">
                        <div className="login-text">
                    <h2><img src="" alt="" /></h2>
                            <p>
                                Experience best quality items and smooth delivery. All our items range from:
                            </p>
                            <button className='btn'><a href="#">Read more</a></button>
                        </div>
                    </div>
                    
            
                <div class="col-right">
                    <div class="login-form">
                        <h1>Login</h1>
                        {message && <p className="error-message fw-bolder text-danger fs-3">{message}!!!!!!!!</p>} 
                        <form onSubmit={formik.handleSubmit}>
                            <p>
                                <input type="email" placeholder="EmaiIl" name='Email' onChange={formik.handleChange}/>
                                <small>{formik.errors.Email}</small>
                                
                            </p>
                            <p>
                                <div className='d-flex'>
                                <input type={isPasswordShow ? "text" : "password"} placeholder="Password" name='Password'  onChange={formik.handleChange}/>
                                <button type='button' class="input-group-text" id="addon-wrapping" onClick={() => { setIsPasswordShow(!isPasswordShow) }} ><i class={`fa-solid fa-eye${isPasswordShow ? "" : "-slash"}`}></i></button>
                                </div>
                                <small>{formik.errors.Password}</small>
                                
                            </p>
                            <p>
                            <button className='btn w-100 btn-primary'  disabled={isLoading}>
                    {
                      !isLoading ? 
                      "Sign In"
                      : "Signing In..........."
                    }
                    
                    
                    </button>
                            </p>
                            <p>
                                <a href="">Forget password?</a>
                               <small>Don't have an account?</small> <a href="">
                                <Link to="/Signup">
                                Create an account.
                                </Link>
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <hr />
            <Footer/>
        </>
    );
}

export default Signin;