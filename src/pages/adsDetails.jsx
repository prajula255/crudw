
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdsDetails() {
    const navigate = useNavigate();

    const [adDetails, setAdDetails] = useState({
        brand: "Maruthi Suzuki",
        year: "",
        fuel: "",
        transmission: "",
        kmDriven: "",
        owners: "",
        price: "",
        description: "",
        images: [],
        location: "Kerala",
    });

    const handleChange = (e) => {
        setAdDetails({ ...adDetails, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setAdDetails({ ...adDetails, images: Array.from(e.target.files) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ad Details Submitted:", adDetails);
        alert("Ad posted successfully!");
        navigate("/profile");
    };

    return (
        <>
            <div className='position-fixed top-0 z-1 bg-secondary-subtle' style={{ height: "12vh", width: "100%" }}>
                <nav className='d-flex justify-content-start align-items-center p-3'>
                    <span onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left fa-lg"></i></span>
                </nav>
            </div>

            <div style={{ marginTop: "12vh" }}>
                <div className='p-3 text-center'>
                    <h2>Post ads</h2>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <form className='border border-1 border-secondary border-opacity-50 w-50' style={{ minHeight: "30rem" }} onSubmit={handleSubmit}>
                        <div className='d-flex flex-column gap-3 p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>Include Details</h4>

                            <div>
                                <p className='mb-0 mt-2'>Brand*</p>
                                <select name="brand" className='form-select' value={adDetails.brand} onChange={handleChange}>
                                    <option>Maruthi Suzuki</option>
                                    <option>Hyundai</option>
                                    <option>Tata</option>
                                    <option>Mahindra</option>
                                </select>
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>Year*</p>
                                <input type='date' name="year" className='form-control' value={adDetails.year} onChange={handleChange} />
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>Fuel*</p>
                                <div className='d-flex flex-row gap-3'>
                                    {['CNG', 'Diesel', 'Petrol', 'Electric'].map(fuelType => (
                                        <label key={fuelType}>
                                            <input type="radio" name="fuel" value={fuelType} onChange={handleChange} checked={adDetails.fuel === fuelType} /> {fuelType}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Transmission</p>
                                <div className="d-flex flex-row gap-3">
                                    {['Automatic', 'Manual'].map(transmissionType => (
                                        <label key={transmissionType}>
                                            <input type='radio' name='transmission' value={transmissionType} onChange={handleChange} checked={adDetails.transmission === transmissionType} /> {transmissionType}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Km driven*</p>
                                <input type="number" name="kmDriven" min="0" className="form-control" value={adDetails.kmDriven} onChange={handleChange} />
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>No. of owners*</p>
                                <div className='d-flex flex-row gap-3'>
                                    {["1st", "2nd", "3rd", "4th", "4+"].map(ownerType => (
                                        <label key={ownerType}>
                                            <input type='radio' name='owners' value={ownerType} onChange={handleChange} checked={adDetails.owners === ownerType} /> {ownerType}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Price*</p>
                                <input type="text" name="price" className="form-control" value={adDetails.price} onChange={handleChange} />
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Description*</p>
                                <textarea name="description" className="form-control" value={adDetails.description} onChange={handleChange}></textarea>
                            </div>

                            <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                                <h4>Upload Images</h4>
                                <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Confirm Location*</p>
                                <select name="location" className='form-select' value={adDetails.location} onChange={handleChange}>
                                    <option>Kerala</option>
                                    <option>TamilNadu</option>
                                    <option>Karnataka</option>
                                    <option>AndhraPradesh</option>
                                    <option>Bihar</option>
                                    <option>Jammu&Kashmir</option>
                                </select>
                            </div>

                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-primary px-4 py-2">Post now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdsDetails;