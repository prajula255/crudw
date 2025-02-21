import React from "react";
import { useNavigate } from "react-router-dom";
function ProfilePage() {
    const navigate = useNavigate();
    const handleCarClick = () => {
        navigate("/addetails")
    }
    return (
        <div >
            <nav className="bg-primary-subtle" style={{ padding: "40px" }}>
            </nav>
            <h2>Post ads</h2>
            <div style={{ border: "1px solid black" }}>
                <h4>Choose Category</h4>
                <div style={{ border: "1px solid black", width: "20%" }} onClick={handleCarClick}>
                    Cars<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="24" width="24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>


                </div>
            </div>
        </div>
    )
}
export default ProfilePage;