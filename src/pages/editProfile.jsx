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




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavEx from "../components/navbar";
import FooterEx from "../components/footer";
import axios from "axios";
import { baseURL } from "../../api_services/baseURL";
import { userUpdateAPI } from "../../api_services/allAPIs/userUpdateAPI";

function EditProfilePage() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const [updatedValues, setUpdatedValues] = useState({
        name: "",
        email: "",
        phone: "",
        dp: [],
    });

    useEffect(() => {
        console.log("current url: ", updatedValues?.dp);
    }, [updatedValues])

    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    const userId = userCredentials?.user_id;

    // Fetch user details
    useEffect(() => {

        const fetchUser = async () => {
            try {
                const response = await axios.get(`${baseURL}/fetchUser/${userId}`);
                setUserDetails(response.data);

            } catch (err) {
                console.error("Error fetching user details: ", err);
            }
        };

        fetchUser();
    }, [userId]);

    // Update state when user details change
    useEffect(() => {
        if (userDetails) {
            setUpdatedValues({
                name: userDetails?.name || "",
                email: userDetails?.email || "",
                phone: userDetails?.mobile || "",
                dp: userDetails?.dp?.length > 0 ? userDetails.dp : [],
            });
        }
    }, [userDetails]);

    const handleProfileChange = (e) => {
        const files = Array.from(e.target.files);
        const newFiles = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));

        setUpdatedValues((prev) => ({
            ...prev,
            dp: newFiles,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUserUpdate = async (e) => {
        e.preventDefault();

        const reqBody = new FormData();
        reqBody.append("name", updatedValues.name);
        reqBody.append("email", updatedValues.email);
        reqBody.append("phone", updatedValues.phone);
        updatedValues.dp.forEach((image) => {
            reqBody.append("dp", image.file);
        });

        const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": ` ${userCredentials.token}`,
        };

        try {
            const result = await userUpdateAPI(reqBody, reqHeader);
            console.log("Profile updated successfully:", result);
        } catch (err) {
            console.error("Error updating profile:", err);
        }
    };

    const isObject = (value) => {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    return (
        <>
            <NavEx />
            <header className="position-fixed top-0 z-1 bg-secondary-subtle" style={{ height: "12vh", width: "100%", boxShadow: "0px 0px 2px 2px #ccc" }}>
                <nav className="d-flex justify-content-start align-items-center p-3" style={{ height: "inherit" }}>
                    <span onClick={() => navigate(-1)}>
                        <i className="fa-solid fa-arrow-left fa-lg"></i>
                    </span>
                </nav>
            </header>

            <div className="bg-danger bg-opacity-10 pb-5" style={{ marginTop: "12vh" }}>
                <form onSubmit={handleUserUpdate}>
                    <div className="d-flex justify-content-center">
                        <div className="mt-5 d-flex flex-column bg-white rounded-3 px-4" style={{ width: "70vw", boxShadow: "0px 0px 10px 2px #ddd" }}>
                            <div className="border-bottom border-1 border-secondary border-opacity-50 py-4 text-center">
                                <h2>My Profile</h2>
                            </div>

                            <div className="grid row border-bottom border-1 border-secondary border-opacity-50 py-4">
                                <div className="col-5 p-4 d-flex flex-column gap-5">
                                    <div className="d-flex flex-row justify-content-center">
                                        <div className="position-relative p-1" style={{ height: "200px", width: "200px" }}>
                                            <div className="border border-2 border-secondary bg-secondary-subtle" style={{ borderRadius: "6rem", height: "200px", width: "200px", overflowX: "hidden" }}>
                                                {
                                                    userDetails?.profileImg?.length === 0 ? 
                                                        <div style={{ height: "100%", width: "100%" }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                            </svg>
                                                        </div>
                                                    : 
                                                    (
                                                        isObject(updatedValues?.dp[0]) ?
                                                            updatedValues?.dp?.map((item, index) => (
                                                                <img key={index} src={item.url} alt="Profile" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                                            ))
                                                            :
                                                            updatedValues?.dp?.map((item, index) => (
                                                                <img key={index} src={`${baseURL}${item}`} alt="Profile" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                                            ))
                                                    )
                                                }
                                            </div>

                                            <div className="position-absolute" style={{ top: "66%", left: "70%" }}>
                                                <input id="imgUploadBtn" type="file" accept="image/*" onChange={handleProfileChange} style={{ display: "none" }} />
                                                <label htmlFor="imgUploadBtn" className="d-flex align-items-center justify-content-center bg-white p-1 rounded-5 border border-2 border-secondary text-secondary" style={{ height: "50px", width: "50px", cursor: "pointer" }}>
                                                    <i className="fa-solid fa-camera"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-7 p-4 px-5">
                                    <div className="mx-4">
                                        <p className="m-0 mt-2">Name:</p>
                                        <input type="text" name="name" className="form-control shadow-none p-3 rounded-3" value={updatedValues.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="mx-4">
                                        <p className="m-0 mt-4">Email:</p>
                                        <input type="text" className="form-control shadow-none p-3 rounded-3" value={updatedValues.email} disabled />
                                    </div>
                                    <div className="mx-4">
                                        <p className="m-0 mt-4">Phone:</p>
                                        <input type="tel" name="phone" className="form-control shadow-none p-3 rounded-3" value={updatedValues.phone} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="py-4 text-center">
                                <button type="submit" className="fs-5 fw-bold btn btn-outline-secondary text-secondary">
                                    Save Profile</button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary w-50"
                                    onClick={() => navigate("/profile")}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <FooterEx />
        </>
    );
}

export default EditProfilePage;
