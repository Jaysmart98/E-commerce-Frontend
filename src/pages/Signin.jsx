// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import log from "../../../assets/log.jpg";
// // import { useFormik } from 'formik';
// // import * as yup from "yup";
// // import { Link, useNavigate,  } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// const Signin = () => {
//     const [name, setName] = useState('');
//     const [mail, setMail] = useState('');
//     const [pass, setPass] = useState('');
//     const [submittedForm, setSubmittedForm] = useState("");

//     let navigate = useNavigate()

//     const submitForm = () => {
//         if (name == '' || mail == '' || pass == '') {
//             alert('Please fill all the fields');
//         } else if (name.length < 3) {
//             alert('username should be at least 3 characters long');
//         } else if (pass.length < 6) {
//             alert('Password should be at least 6 characters long');
//         } else if (!/^[a-zA-Z0-9]+$/.test(name)) {
//             alert('Name should contain only letters and numbers');
//         }
//          else {
//             const obj = { name, mail, pass};
//             console.log(obj);
//             setSubmittedForm(...submittedForm, obj);
//             console.log(submittedForm);
//             navigate('/Dashboard')
//         }
//     };

//     return (
//         <>
//         <div className="container-fluid col-lg-5 col-12 mt-lg-5 mt-3 shadow mx-auto p-lg-4 p-3 rounded-3">
//         <h1 className="text-center my-lg-4 my-3 text-secondary">SIGN IN</h1>

//         <input  type="name" placeholder="Username or email" onChange={(e) => setName(e.target.value)}  className="my-2 form-control shadow-none"/>
//         <input  type="email" placeholder="Email" onChange={(e) => setMail(e.target.value)}  className="my-2 form-control shadow-none"/>
//         <input className="my-2 form-control shadow-none" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
//         <button className="btn  btn-secondary w-100 my-3" onClick={submitForm}>Login</button>

//     </div>

//         { submittedForm && (
//             <div>
//                 <h2>Submitted Data</h2>
//                 <p>Name: {submittedForm.name}</p>
//                 <p>Email: {submittedForm.mail}</p>
//                 <p>Password: {submittedForm.pass}</p>
//                 <button id='del'>Delete</button>
//             </div>
//         )}
//         </>
//     );
// };

// export default Signin;


import React, { useState, useEffect } from 'react';
// import log from "../../../assets/log.jpg";
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link, useNavigate,  } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Signin = () => {
    const [message, setMessage] = useState(''); // State for messages
    const [isLoading, setIsLoading] = useState(false); 
    const [isPasswordShow, setIsPasswordShow] = useState(false)
  const   navigate = useNavigate();   

     const url = "e-commerce-backend-tau-five.vercel.app"

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
                    navigate("/pages/dashboard")
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
                                <Link to="/pages/signup">
                                Create an account.
                                </Link>
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Signin;