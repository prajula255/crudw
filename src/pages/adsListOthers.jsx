// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { baseURL } from "../../api_services/baseURL";

// function AdsList() {
//     const [ads, setAds] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

//     useEffect(() => {
//         fetchAllAds();
//     }, []);

//     const fetchAllAds = async () => {
//         try {
//             if (!userCredentials) {
//                 setError("User  credentials not found in local storage");
//                 setLoading(false);
//                 return;
//             }

//             const reqHeader = {
//                 "Authorization": `${userCredentials.token}`
//             };

//             const response = await axios.get(`${baseURL}/adFetchAll`, { headers: reqHeader });

//             if (response.data && Array.isArray(response.data)) {
//                 const filteredAds = response.data.filter(ad => ad.user_id !== userCredentials.user_id);
//                 setAds(filteredAds);
//             } else {
//                 setError("Invalid API response format");
//             }
//         } catch (error) {
//             setError("Error fetching ads: " + error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Other Users Ads</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>{error}</p>
//             ) : ads.length === 0 ? (
//                 <p>No ads available.</p>
//             ) : (
//                 <div className="row">
//                     {ads.map((ad) => (
//                         <div key={ad._id} className="col-md-4 mb-4">
//                             <div className="card">
//                                 {ad.imgPath && ad.imgPath.length > 0 ? (
//                                     <div style={{ height: "200px", width: "200px" }}>
//                                         <img
//                                             src={`${baseURL}${ad.imgPath[0]}`}
//                                             className="card-img-top"
//                                             alt="Ad Image"
//                                             style={{ height: "100%", width: "100%", objectFit: "contain" }}
//                                         />
//                                     </div>
//                                 ) : (
//                                     <img
//                                         src=""
//                                         className="card-img-top"
//                                         alt="No Image Available"
//                                         style={{ height: "200px", objectFit: "cover" }}
//                                     />
//                                 )}

//                                 <div className="card-body">
//                                     <h5 className="card-title">{ad.brand} - {ad.year}</h5>
//                                     <p className="card-text"><strong>Fuel:</strong> {ad.fuel}</p>
//                                     <p className="card-text"><strong>Transmission:</strong> {ad.transmission}</p>
//                                     <p className="card-text"><strong>Kilometers Driven:</strong> {ad.kmdriven} km</p>
//                                     <p className="card-text"><strong>Owners:</strong> {ad.no_of_owners}</p>
//                                     <p className="card-text"><strong>Price:</strong> ₹{ad.price}</p>
//                                     <p className="card-text"><strong>Description:</strong> {ad.description}</p>
//                                     <p className="card-text"><strong>Location:</strong> {ad.location}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AdsList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../api_services/baseURL";

function AdsList() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    useEffect(() => {
        fetchAllAds();
    }, []);

    const fetchAllAds = async () => {
        try {
            if (!userCredentials) {
                setError("User credentials not found in local storage");
                setLoading(false);
                return;
            }

            const reqHeader = {
                Authorization: `${userCredentials.token}`,
            };

            const response = await axios.get(`${baseURL}/adFetchAll`, { headers: reqHeader });

            if (response.data && Array.isArray(response.data)) {
                const filteredAds = response.data.filter((ad) => ad.user_id !== userCredentials.user_id);
                setAds(filteredAds);
            } else {
                setError("Invalid API response format");
            }
        } catch (error) {
            setError("Error fetching ads: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Other Users Ads</h2>
            {loading ? (
                <div className="loading-container">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <p className="text-danger text-center">{error}</p>
            ) : ads.length === 0 ? (
                <p className="text-muted text-center">No ads available.</p>
            ) : (
                <div className="row">
                    {ads.map((ad) => (
                        <div key={ad._id} className="col-md-4 mb-4">
                            <div className="card shadow-sm ad-card">
                                <div className="image-container">
                                    <img
                                        src={ad.imgPath && ad.imgPath.length > 0 ? `${baseURL}${ad.imgPath[0]}` : "/placeholder.jpg"}
                                        className="card-img-top"
                                        alt="Ad Image"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{ad.brand} - {ad.year}</h5>
                                    <p className="card-text"><strong>Fuel:</strong> {ad.fuel}</p>
                                    <p className="card-text"><strong>Transmission:</strong> {ad.transmission}</p>
                                    <p className="card-text"><strong>Kilometers Driven:</strong> {ad.kmdriven} km</p>
                                    <p className="card-text"><strong>Owners:</strong> {ad.no_of_owners}</p>
                                    <p className="card-text price"><strong>Price:</strong> ₹{ad.price}</p>
                                    <p className="card-text location"><strong>Location:</strong> {ad.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdsList;
