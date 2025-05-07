import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [num, setNum] = useState('');
    const [pass, setPass] = useState('');
    const [submittedForm, setSubmittedForm] = useState("");

    let navigate = useNavigate()

    const submitForm = () => {
        if (name == '' || mail == '' || pass == '' || num == '') {
            alert('Please fill all the fields');
        } else if (name.length < 3) {
            alert('username should be at least 3 characters long');
        } else if (num.length < 11) {
            alert('Phone number should be at least 11 digits long');
        } else if (pass.length < 6) {
            alert('Password should be at least 6 characters long');
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(mail)) {
            alert('Please enter a valid email address');
        } else if (!/^\d+$/.test(num)) {
            alert('Phone number should contain only digits');
        } else if (!/^[a-zA-Z0-9]+$/.test(name)) {
            alert('Name should contain only letters and numbers');
        }
         else {
            const obj = { name, mail, num , pass};
            console.log(obj);
            setSubmittedForm(...submittedForm, obj);
            console.log(submittedForm);
            navigate('/signin')
        }
    };

    return (
        <>
        <div className="container-fluid col-lg-5 col-12 mt-lg-5 mt-3 shadow mx-auto p-lg-4 p-3 rounded-3">
        <h1 className="text-center my-lg-4 my-3 text-secondary">SIGN UP</h1>

        <input  type="name" placeholder="Enter a username" onChange={(e) => setName(e.target.value)}  className="my-2 form-control shadow-none"/>
        <input  type="email" placeholder="Enter your email" onChange={(e) => setMail(e.target.value)}  className="my-2 form-control shadow-none"/>
        <input  type="number" placeholder="Enter your phone number" onChange={(e) => setNum(e.target.value)}  className="my-2 form-control shadow-none"/>
        <input className="my-2 form-control shadow-none" type="password" placeholder="Enter a strong password" onChange={(e) => setPass(e.target.value)}/>
       
       
        <button className="btn  btn-secondary w-100 my-3" onClick={submitForm}>Submit</button>

    </div>

        { submittedForm && (
            <div>
                <h2>Submitted Data</h2>
                <p>Name: {submittedForm.name}</p>
                <p>Email: {submittedForm.mail}</p>
                <p>Phone Number: {submittedForm.num}</p>
                <p>Password: {submittedForm.pass}</p>
                <button id='del'>Delete</button>
            </div>
        )}
        </>
    );
};

export default Signup;