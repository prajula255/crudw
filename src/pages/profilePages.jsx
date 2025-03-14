import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FooterEx from "../components/footer";
import NavEx from "../components/navbar";
import axios from "axios";
import { baseURL } from "../../api_services/baseURL";

function ProfilePage() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({})
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"))

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`${baseURL}/fetchUser/${userCredentials.user_id}`)
            setUserDetails(response.data)
        }
        fetchUser();
    }, [userCredentials]);

    const date = new Date(userDetails.createdAt).toLocaleDateString("en-GB");
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
                                    className="bg-secondary rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: "100px", height: "100px", overflow: "hidden" }}
                                >
                                    {
                                        userDetails?.profileImg?.length > 0 ?
                                            (
                                                <img
                                                    src={`${baseURL}${userDetails.profileImg[0]}`}
                                                    alt="Profileimg"
                                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                                />
                                            )
                                            :
                                            (
                                                <span className="text-white fw-bold">DP</span>
                                            )
                                    }
                                </div>

                            </div>
                            <p className="fw-semibold mt-3">{userDetails.name}</p>
                            <p className="fw-light text-muted">{userDetails.email}</p>
                            <p className="fw-light text-muted">{userDetails.phone}</p>
                            <p className="text-muted">Member since <span className="fw-light">{date}</span></p>
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