import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FooterEx from "../components/footer";
import NavEx from "../components/navbar";

function ProfilePage() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null); // Create a ref for the file input

    const [name, setName] = useState(localStorage.getItem("name") || "Prajula K P");
    const [email, setEmail] = useState(localStorage.getItem("email") || "prajula123@gmail.com");
    const [phone, setPhone] = useState(localStorage.getItem("phone") || "1234567891");
    const [profileDP, setProfileDP] = useState(localStorage.getItem("profileDP") || null);

    useEffect(() => {
        setName(localStorage.getItem("name") || "Prajula K P");
        setEmail(localStorage.getItem("email") || "prajula123@gmail.com");
        setPhone(localStorage.getItem("phone") || "1234567891");
    }, []);


    const handleProfile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileDP(imageUrl);
            localStorage.setItem("profileDP", imageUrl);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const registrationDate = "21 february 2025"
    return (
        <>
            <NavEx />
            <div className="container-fluid bg-light min-vh-100 d-flex flex-column">
                <div className="container flex-grow-1">
                    <div className="row py-5">
                        <div className="col-md-3 p-4 border rounded bg-white shadow">
                            <h2 className="fw-bold">My Profile</h2>
                            <div className="d-flex align-items-center mt-3">
                                <div
                                    className="bg-secondary p-4 rounded d-flex align-items-center justify-content-center"
                                    style={{ width: "80px", height: "80px", cursor: 'pointer' }}
                                    onClick={handleClick}
                                >
                                    {profileDP ? (
                                        <img
                                            src={profileDP}
                                            alt="Profile"
                                            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                                        />
                                    ) : (
                                        <span className="text-white fw-bold">DP</span>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleProfile}
                                    accept="image/*"
                                />
                            </div>
                            <p className="fw-semibold mt-3">{name}</p>
                            <p className="fw-light text-muted">{email}</p>
                            <p className="fw-light text-muted">{phone}</p>
                            <p className="text-muted">Member since <span className="fw-light">{registrationDate}</span></p>
                            <button
                                className="btn btn-outline-secondary w-100 mt-3"
                                onClick={() => navigate("/edit")}
                            >
                                Edit Profile
                            </button>
                        </div>

                        <div className="col-md-9 d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="mb-3">
                                <i className="fa-solid fa-car text-secondary" style={{ fontSize: "6rem" }}></i>
                            </div>
                            <p className="text-muted">Nothing listed.</p>
                            <button className="btn btn-outline-secondary mt-3 px-4 py-2" onClick={() => navigate("/addetails")}>
                                Start Selling
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEx />
        </>
    );
}

export default ProfilePage;