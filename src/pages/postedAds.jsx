import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adsAPI } from "../../api_services/allAPIs/adsAPI"; // Import API service

function MyAds() {
    const navigate = useNavigate();
    const [ads, setAds] = useState([]);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    useEffect(() => {
        fetchUserAds();
    }, []);

    const fetchUserAds = async () => {
        try {
            const reqHeader = {
                "Authorization": `${userCredentials.token}`
            };

            // API Call to Fetch User-Specific Ads
            const response = await adsAPI.getUserAds(userCredentials.user_id, reqHeader);
            setAds(response.data); // Store ads in state
        } catch (error) {
            console.error("Error fetching ads:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>My Posted Ads</h2>
            {ads.length === 0 ? (
                <p>No ads posted yet.</p>
            ) : (
                <div className="row">
                    {ads.map((ad) => (
                        <div key={ad.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={ad.images[0]} className="card-img-top" alt="Ad" style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{ad.brand} - {ad.year}</h5>
                                    <p className="card-text">Price: ₹{ad.price}</p>
                                    <p className="card-text">Location: {ad.location}</p>
                                    <button className="btn btn-primary" onClick={() => navigate(`/ad-details/${ad.id}`)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyAds;
