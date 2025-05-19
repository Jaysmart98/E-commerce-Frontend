// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const Signup = () => {
//     const [name, setName] = useState('');
//     const [mail, setMail] = useState('');
//     const [num, setNum] = useState('');
//     const [pass, setPass] = useState('');
//     const [submittedForm, setSubmittedForm] = useState("");

//     let navigate = useNavigate()

//     const submitForm = () => {
//         if (name == '' || mail == '' || pass == '' || num == '') {
//             alert('Please fill all the fields');
//         } else if (name.length < 3) {
//             alert('username should be at least 3 characters long');
//         } else if (num.length < 11) {
//             alert('Phone number should be at least 11 digits long');
//         } else if (pass.length < 6) {
//             alert('Password should be at least 6 characters long');
//         } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(mail)) {
//             alert('Please enter a valid email address');
//         } else if (!/^\d+$/.test(num)) {
//             alert('Phone number should contain only digits');
//         } else if (!/^[a-zA-Z0-9]+$/.test(name)) {
//             alert('Name should contain only letters and numbers');
//         }
//          else {
//             const obj = { name, mail, num , pass};
//             console.log(obj);
//             setSubmittedForm(...submittedForm, obj);
//             console.log(submittedForm);
//             navigate('/signin')
//         }
//     };

//     return (
//         <>
//         <div className="container-fluid col-lg-5 col-12 mt-lg-5 mt-3 shadow mx-auto p-lg-4 p-3 rounded-3">
//         <h1 className="text-center my-lg-4 my-3 text-secondary">SIGN UP</h1>

//         <input  type="name" placeholder="Enter a username" onChange={(e) => setName(e.target.value)}  className="my-2 form-control shadow-none"/>
//         <input  type="email" placeholder="Enter your email" onChange={(e) => setMail(e.target.value)}  className="my-2 form-control shadow-none"/>
//         <input  type="number" placeholder="Enter your phone number" onChange={(e) => setNum(e.target.value)}  className="my-2 form-control shadow-none"/>
//         <input className="my-2 form-control shadow-none" type="password" placeholder="Enter a strong password" onChange={(e) => setPass(e.target.value)}/>
       
       
//         <button className="btn  btn-secondary w-100 my-3" onClick={submitForm}>Submit</button>

//     </div>

//         { submittedForm && (
//             <div>
//                 <h2>Submitted Data</h2>
//                 <p>Name: {submittedForm.name}</p>
//                 <p>Email: {submittedForm.mail}</p>
//                 <p>Phone Number: {submittedForm.num}</p>
//                 <p>Password: {submittedForm.pass}</p>
//                 <button id='del'>Delete</button>
//             </div>
//         )}
//         </>
//     );
// };

// export default Signup;




import React, { useEffect, useState } from 'react';
// import log from "../../../assets/log.jpg";
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


const Signup = () => {
  const [message, setMessage] = useState(''); // State to hold the message
  const [isLoading, setIsLoading] = useState(false); // State to control loading
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  
   const url = "https://api.example.com/signup"; // Replace with your API URL

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Password: "",
    },

    onSubmit: (values) => {
      setIsLoading(true);
      axios.post(url, values)
        .then((res) => {
          let userName = userNamee.value
          console.log(res);
          Swal.fire("User Registered, Login to proceed");
          navigate("/pages/Signin");
          localStorage.setItem("userName", JSON.stringify({ name: userName }));
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.response?.data.message || 'An error occurred'); // Set error message
        })
        .finally(() => {
          setIsLoading(false);
        })
    },

    validationSchema: yup.object({
      Email: yup.string().required("Email is required"),
      Name: yup.string()
      .required("Name is required")
      .matches(/^[A-Z]/, "First letter must be uppercase"), 
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
      <div className="wrapper login-3">
        <div className="container d-flex" style={{ marginTop: "160px" }}>
          <div className="col-left">
            <div className="login-text">
              <p>
                Experience a range of beautifully designed rooms and suites that cater to all your needs. Each room is equipped with:
              </p>
              <button className='btn'>Read More</button>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>SIGNUP!</h2>
              {message && <p className="error-message fw-bolder text-danger fs-3">{message}!!!!!!!!</p>} 
              <form onSubmit={formik.handleSubmit}>
                <p>
                  <input id='userNamee' type="text" placeholder="Name" name='Name' onChange={formik.handleChange} />
                  <small>{formik.errors.Name}</small>
                </p>
                <p>
                  <input type="email" placeholder="Email" name='Email' onChange={formik.handleChange} />
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
                      "Sign up"
                      : "Signing up...Please wait"
                    }
                    
                    
                    </button>
                </p>
                <p>
                  <small>Have an account?</small>
                  <Link to="/user/signin"> Sign In.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;