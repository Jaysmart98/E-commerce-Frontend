import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <h1 className='text-center'>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </>
    )
}

export default Error404

