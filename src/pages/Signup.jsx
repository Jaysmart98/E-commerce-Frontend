import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [submittedForm, setSubmittedForm] = useState("");

    let navigate = useNavigate()

    const submitForm = () => {
        if (name == '' || mail == '' || pass == '') {
            alert('Please fill all the fields');
        } else {
            const obj = { name, mail, pass};
            console.log(obj);
            setSubmittedForm(...submittedForm, obj);
            console.log(submittedForm);
            navigate('/signin')
        }
    };

    return (
        <>
        <h1>Sign up</h1>
        <input type="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter your email" onChange={(e) => setMail(e.target.value)} />
        <input type="password" placeholder="Enter your Password" onChange={(e) => setPass(e.target.value)} />
        <button onClick={submitForm}>Submit</button>

        { submittedForm && (
            <div>
                <h2>Submitted Data</h2>
                <p>Name: {submittedForm.name}</p>
                <p>Email: {submittedForm.mail}</p>
                <p>Password: {submittedForm.pass}</p>
                <button id='del'>Delete</button>
            </div>
        )}
        </>
    );
};

export default Signup;