// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import NavEx from "../components/navbar";
// import FooterEx from "../components/footer";
// import axios from "axios";
// import { baseURL } from "../../api_services/baseURL";
// import { userUpdateAPI } from "../../api_services/allAPIs/userUpdateAPI";

// function EditProfile() {
//     const navigate = useNavigate();
//     const fileInputRef = useRef(null);

//     const [userDetails, setUserDetails] = useState({})
//     const userCredentials = JSON.parse(localStorage.getItem("userCredentials"))

//     useEffect(() => {
//         const fetchUser = async () => {
//             const response = await axios.get(`${baseURL}/fetchUser/${userCredentials.user_id}`)
//             setUserDetails(response.data)
//         }
//         fetchUser();
//     }, [userCredentials]);

//     const [updatedValues, setUpdatedValues] = useState(() => ({
//         name: userDetails?.name || "",
//         email: userDetails?.email || "",
//         phone: userDetails?.phone || "",
//         dp: userDetails?.profileImg || []
//     }));


//     // useEffect(() => {
//     //     if (userDetails) {
//     //         setUpdatedValues({
//     //             name: userDetails.name || "",
//     //             email: userDetails.email || "",
//     //             phone: userDetails.phone || "",
//     //             dp: userDetails.profileImg || []
//     //         });
//     //     }
//     // }, [userDetails]);


//     const handleProfileChange = (e) => {
//         const files = e.target.files;
//         if (files.length > 0) {
//             const newImages = Array.from(files).map(file => URL.createObjectURL(file));

//             setUpdatedValues((prev) => ({
//                 ...prev,
//                 dp: newImages
//             }));
//         }
//     };

//     const handleClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const reqBody = new FormData()
//         reqBody.append('name', updatedValues.name)
//         reqBody.append('email', updatedValues.email)
//         reqBody.append('phone', updatedValues.phone)
//         updatedValues.dp.forEach((file, index) => {
//             reqBody.append(`profileImg`, file);
//         });

//         const reqHeader = {
//             "Content-Type": "multipart/form-data",
//             "Authorization": `${userCredentials.token}`
//         }

//         const result = userUpdateAPI(reqBody, reqHeader)
//         console.log(result);

//         navigate("/profile");
//     };

//     return (
//         <>
//             <NavEx />
//             <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
//                 <div className="col-md-6 p-4 border rounded bg-white shadow-lg">
//                     <h2 className="fw-bold text-center mb-4">Edit Profile</h2>

//                     {/* Profile Image Section */}
//                     <div className="text-center mb-4">
//                         <div
//                             className="border rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
//                             style={{ width: "120px", height: "120px", cursor: "pointer", backgroundColor: "#f0f0f0" }}
//                             onClick={handleClick}
//                         >
//                             {
//                                 userDetails?.profileImg?.length > 0 ?
//                                     (
//                                         <img
//                                             src={profileDP}
//                                             alt="Profile"
//                                             className="img-fluid"
//                                             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                         />
//                                     )
//                                     :
//                                     (
//                                         <span className="text-secondary fw-bold">dp</span>
//                                     )
//                             }
//                         </div>
//                         <input
//                             type="file"
//                             ref={fileInputRef}
//                             style={{ display: "none" }}
//                             onChange={handleProfileChange}
//                             accept="image/*"
//                         />
//                     </div>

//                     {/* Form Section */}
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <label className="form-label fw-semibold" style={{ color: 'grey' }}>Name</label>
//                             <input
//                                 type="text"
//                                 className="form-control p-2 rounded"
//                                 value={updatedValues.name}
//                                 onChange={(e) => setUpdatedValues((prev) => ({
//                                     ...prev, name: e.target.value
//                                 }))}
//                                 placeholder="Enter your name"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label fw-semibold" style={{ color: 'grey' }}>Email</label>
//                             <input
//                                 type="email"
//                                 className="form-control p-2 rounded"
//                                 value={updatedValues.email}
//                                 onChange={(e) => setUpdatedValues((prev) => ({
//                                     ...prev, email: e.target.value
//                                 }))}
//                                 placeholder="Enter your email"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label fw-semibold" style={{ color: 'grey' }}>Phone</label>
//                             <input
//                                 type="tel"
//                                 className="form-control p-2 rounded"
//                                 value={updatedValues.phone}
//                                 onChange={(e) => setUpdatedValues((prev) => ({
//                                     ...prev, phone: e.target.value
//                                 }))}
//                                 placeholder="Enter your phone number"
//                                 required
//                             />
//                         </div>

//                         {/* Button Section */}
//                         <div className="d-flex justify-content-between mt-4">
//                             <button type="submit" className="btn btn-primary w-50 me-2">Save Changes</button>
//                             <button
//                                 type="button"
//                                 className="btn btn-outline-secondary w-50"
//                                 onClick={() => navigate("/profile")}
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <FooterEx />
//         </>
//     );
// }

// export default EditProfile;




import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavEx from "../components/navbar";
import FooterEx from "../components/footer";
import axios from "axios";
import { baseURL } from "../../api_services/baseURL";
import { userUpdateAPI } from "../../api_services/allAPIs/userUpdateAPI";

function EditProfile() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    // Store fetched user details in a ref to prevent re-renders
    const userDetailsRef = useRef(null);

    const [updatedValues, setUpdatedValues] = useState({
        name: "",
        email: "",
        phone: "",
        dp: []
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${baseURL}/fetchUser/${userCredentials.user_id}`);
                userDetailsRef.current = response.data;

                setUpdatedValues((prev) => ({
                    ...prev,
                    name: response.data.name || "",
                    email: response.data.email || "",
                    phone: response.data.phone || "",
                    dp: response.data.profileImg || "",
                }));
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        fetchUser();
    }, [userCredentials.user_id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedValues((prev) => ({
                    ...prev,
                    dp: reader.result, // Preview image before upload
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reqBody = new FormData();
        reqBody.append("name", updatedValues.name);
        reqBody.append("email", updatedValues.email);
        reqBody.append("phone", updatedValues.phone);

        if (fileInputRef.current.files[0]) {
            reqBody.append("profileImg", fileInputRef.current.files[0]);
        }

        const reqHeader = {
            "Content-Type": "multipart/form-data",
            Authorization: `${userCredentials.token}`,
        };

        try {
            await userUpdateAPI(reqBody, reqHeader);
            navigate("/profile");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <>
            <NavEx />
            <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
                <div className="col-md-6 p-4 border rounded bg-white shadow-lg">
                    <h2 className="fw-bold text-center mb-4">Edit Profile</h2>

                    {/* Profile Image Section */}
                    <div className="text-center mb-4">
                        <div
                            className="border rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                            style={{
                                width: "120px",
                                height: "120px",
                                cursor: "pointer",
                                backgroundColor: "#f0f0f0",
                            }}
                            onClick={handleClick}
                        >
                            {updatedValues.dp ? (
                                <img
                                    src={updatedValues.dp}
                                    alt="Profile"
                                    className="img-fluid"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                <span className="text-secondary fw-bold">DP</span>
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleProfileChange}
                            accept="image/*"
                        />
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold" style={{ color: "grey" }}>
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control p-2 rounded"
                                name="name"
                                value={updatedValues.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold" style={{ color: "grey" }}>
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control p-2 rounded"
                                name="email"
                                value={updatedValues.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold" style={{ color: "grey" }}>
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="form-control p-2 rounded"
                                name="phone"
                                value={updatedValues.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Button Section */}
                        <div className="d-flex justify-content-between mt-4">
                            <button type="submit" className="btn btn-primary w-50 me-2">
                                Save Changes
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary w-50"
                                onClick={() => navigate("/profile")}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterEx />
        </>
    );
}

export default EditProfile;
