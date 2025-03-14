// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { baseURL } from "../../api_services/baseURL";

// function MyAds() {
//     const [ads, setAds] = useState([]);
//     const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

//     useEffect(() => {
//         fetchUserAds();
//     }, []);

//     const fetchUserAds = async () => {
//         try {
//             const reqHeader = {
//                 "Authorization": `${userCredentials.token}`
//             };

//             const response = await axios.get(`${baseURL}/adFetch/${userCredentials.user_id}`, { headers: reqHeader });

//             if (response.data && Array.isArray(response.data)) {
//                 setAds(response.data);
//             } else {
//                 console.error("Invalid API response format", response.data);
//             }
//         } catch (error) {
//             console.error("Error fetching ads:", error);
//         }
//     };

//     useEffect(() => {
//         console.log(ads);

//     }, [ads])

//     return (
//         <div className="container mt-4">
//             <h2>My Posted Ads</h2>
//             {ads.length === 0 ? (
//                 <p>No ads posted yet.</p>
//             ) : (
//                 <div className="row">
//                     {ads.map((ad) => (
//                         <div key={ad._id} className="col-md-4 mb-4">
//                             <div className="card">
//                                 {ad.imgPath && ad.imgPath.length > 0 ? (
//                                     <div className="" style={{ height: "200px", width: "200px" }}>
//                                         <img
//                                             src={`${baseURL}${ad.imgPath[0]}`}
//                                             className="card-img-top"
//                                             alt="abcd"
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
//                                     {/* <button className="btn btn-primary" onClick={() => navigate(`/myads/${ad._id}`)}>View Details</button> */}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default MyAds;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../api_services/baseURL";

function MyAds() {
    const [ads, setAds] = useState([]);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    useEffect(() => {
        fetchUserAds();
    }, []);

    const fetchUserAds = async () => {
        if (!userCredentials) {
            console.error("User credentials not found");
            return;
        }

        try {
            const reqHeader = {
                Authorization: `${userCredentials.token}`,
            };

            const response = await axios.get(
                `${baseURL}/adFetch/${userCredentials.user_id}`,
                { headers: reqHeader }
            );

            if (response.data && Array.isArray(response.data)) {
                setAds(response.data);
            } else {
                console.error("Invalid API response format", response.data);
            }
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
                        <div key={ad._id} className="col-md-4 mb-4" >
                            <div className="card">
                                <div className="image-container">
                                    {ad.imgPath && ad.imgPath.length > 0 ? (
                                        <img
                                            src={`${baseURL}${ad.imgPath[0]}`}
                                            className="card-img-top"
                                            alt="Ad Image"
                                        />
                                    ) : (
                                        <img
                                            src="placeholder-image-url"
                                            className="card-img-top"
                                            alt="No Image Available"
                                        />
                                    )}
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">
                                        {ad.brand} - {ad.year}
                                    </h5>
                                    <p className="card-text">
                                        <strong>Fuel:</strong> {ad.fuel}
                                    </p>
                                    <p className="card-text">
                                        <strong>Transmission:</strong> {ad.transmission}
                                    </p>
                                    <p className="card-text">
                                        <strong>Kilometers Driven:</strong> {ad.kmdriven} km
                                    </p>
                                    <p className="card-text">
                                        <strong>Owners:</strong> {ad.no_of_owners}
                                    </p>
                                    <p className="card-text">
                                        <strong>Price:</strong> ₹{ad.price}
                                    </p>
                                    <p className="card-text">
                                        <strong>Description:</strong> {ad.description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Location:</strong> {ad.location}
                                    </p>
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
