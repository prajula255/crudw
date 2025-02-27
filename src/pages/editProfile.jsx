
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavEx from "../components/navbar";
import FooterEx from "../components/footer";

function EditProfile() {
    const navigate = useNavigate();

    const [name, setName] = useState("Prajula K P");
    const [email, setEmail] = useState("prajula123@gmail.com");
    const [phone, setPhone] = useState("1234567891");

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { name, email, phone };
        console.log("Updated Profile:", updatedUser);
        navigate("/profile");
    };

    return (
        <>
            <NavEx />
            <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <div className="col-md-6 p-4 border rounded bg-white shadow">
                    <h2 className="fw-bold text-center">Edit Profile</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Phone</label>
                            <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/profile")}>
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
