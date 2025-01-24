import React, { Children, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isLoggedInVar = useSelector((state) => state.counter.isLoggedIn)
    const [isAllowed, setIsAllowed] = useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        if (localStorage.getItem("userCredentials")) {
            setIsAllowed(true)
        }
        else {
            setIsAllowed(false)
            navigate("/")
        }
    }, [isLoggedInVar])
    console.log(isAllowed)
    return (
        isAllowed &&
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;