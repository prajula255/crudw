
import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { adsAPI } from "../../api_services/allAPIs/adsAPI";

function AdsDetails() {
    const navigate = useNavigate();

    const [adDetails, setAdDetails] = useState({
        brand: "",
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

    const handleBrandChange = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            brand: e.target.value
        }));
    };

    const handleYearChange = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            year: e.target.value
        }));
    };

    const handleFuel = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            fuel: e.target.value
        }))
    }

    const handleTransmission = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            transmission: e.target.value
        }))
    }

    const handleDistance = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            kmDriven: e.target.value
        }))
    }

    const handleOwner = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            owners: e.target.value
        }))
    }

    const handleAmt = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            price: e.target.value
        }))
    }

    const handleDesc = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            description: e.target.value
        }))
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        const newImages = files.map((file) => ({
            file,
            url: URL.createObjectURL(file)
        }))
        setAdDetails((prev) => ({
            ...prev,
            images: newImages
        }))
    };

    const handleRemoveImage = (index) => {
        const newArray = adDetails.images.filter((_, i) => i !== index);
        setAdDetails((prev) => ({
            ...prev,
            images: newArray
        }))
    }

    const handleFileUpload = async (event) => {
        event.preventDefault()
        const requestBody = new FormData()
        requestBody.append("brand", adDetails.brand)
        requestBody.append("year", adDetails.year)
        requestBody.append("fuel", adDetails.fuel)
        requestBody.append("transmission", adDetails.transmission)
        requestBody.append("kmdriven", adDetails.kmDriven)
        requestBody.append("no of owners", adDetails.owners)
        requestBody.append("price", adDetails.price)
        requestBody.append("description", adDetails.description)
        requestBody.append("images", adDetails.images)
        requestBody.append("location", adDetails.location)
        console.log(typeof (requestBody));
        console.log(...requestBody);

        const userCredentials = JSON.parse(localStorage.getItem('userCredentials'))

        const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `${userCredentials.token}`

        }

        try {
            const result = await adsAPI(requestBody, reqHeader)
            console.log("result : ", result);

        } catch (error) {
            return error
        }
    }

    const handleLoc = (e) => {
        setAdDetails((prev) => ({
            ...prev,
            location: e.target.value
        }))
    }


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
                    <form className='border border-1 border-secondary border-opacity-50 w-50' style={{ minHeight: "30rem" }} onSubmit={handleFileUpload}>
                        <div className='d-flex flex-column gap-3 p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>Include Details</h4>

                            <div>
                                <p className='mb-0 mt-2'>Brand*</p>
                                <select name="brand" onChange={(e) => handleBrandChange(e)} defaultValue="default" className='form-select' >
                                    <option value="default" disabled>Select brand</option>
                                    <option value="maruthi suzuki">Maruthi Suzuki</option>
                                    <option value="hyundai">Hyundai</option>
                                    <option value="tata">Tata</option>
                                    <option value="mahindra">Mahindra</option>
                                </select>
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>Year*</p>
                                <input type='date' name="year" className='form-control' value={adDetails.year} onChange={handleYearChange} />
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>Fuel*</p>
                                <div className='d-flex flex-row gap-3'>
                                    {['CNG', 'Diesel', 'Petrol', 'Electric'].map(fuelType => (
                                        <label key={fuelType}>
                                            <input type="radio" name="fuel" value={fuelType} onChange={handleFuel} checked={adDetails.fuel === fuelType} /> {fuelType}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Transmission</p>
                                <div className="d-flex flex-row gap-3">
                                    {['Automatic', 'Manual'].map(transmissionType => (
                                        <label key={transmissionType}>
                                            <input type='radio' name='transmission' value={transmissionType} onChange={handleTransmission} checked={adDetails.transmission === transmissionType} /> {transmissionType}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Km driven*</p>
                                <input type="number" name="kmDriven" min="0" className="form-control" value={adDetails.kmDriven} onChange={handleDistance} />
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>No. of owners*</p>
                                <div className='d-flex flex-row gap-3'>
                                    {["1st", "2nd", "3rd", "4th", "4+"].map(ownerType => (
                                        <label key={ownerType}>
                                            <input type='radio' name='owners' value={ownerType} onChange={handleOwner} checked={adDetails.owners === ownerType} /> {ownerType}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Price*</p>
                                <input type="text" name="price" className="form-control" value={adDetails.price} onChange={handleAmt} />
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Description*</p>
                                <textarea name="description" className="form-control" value={adDetails.description} onChange={handleDesc}></textarea>
                            </div>

                            <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                                <h4>Upload Images</h4>
                                <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                                <div className="d-flex flex-row flex-wrap gap-1">
                                    {
                                        adDetails.images.map((item, index) => (
                                            <div key={index + "image"} style={{ height: "100px", width: "100px", position: "relative" }}>
                                                <img src={item.url} alt="img" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                                <span role="button" className="position-absolute p-1 bg-danger top-0 end-0" onClick={() => handleRemoveImage(index)}>x</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Confirm Location*</p>
                                <select name="location" className='form-select' value={adDetails.location} onChange={handleLoc}>
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