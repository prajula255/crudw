import React from "react";
import { useNavigate } from "react-router-dom";

function AdsDetails() {
    const navigate = useNavigate();
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
                    <form className='border border-1 border-secondary border-opacity-50 w-50' style={{ minHeight: "30rem" }}>
                        <div className='d-flex flex-column gap-3 p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>Include Details</h4>

                            <div>
                                <p className='mb-0 mt-2'>Brand*</p>
                                <select className='form-select'>
                                    <option>Maruthi Suzuki</option>
                                    <option>Hyundai</option>
                                    <option>Tata</option>
                                    <option>Mahindra</option>
                                </select>
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>Year*</p>
                                <input type='date' className='form-control shadow-none ps-3 pe-5 py-3 rounded-3' />
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>Fuel*</p>
                                <div className='d-flex flex-row gap-3'>
                                    <label><input type="radio" name="fuel" value="CNG" /> CNG</label>
                                    <label><input type="radio" name="fuel" value="Diesel" /> Diesel</label>
                                    <label><input type="radio" name="fuel" value="Petrol" /> Petrol</label>
                                    <label><input type="radio" name="fuel" value="Electric" /> Electric</label>
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Transmission</p>
                                <div className="d-flex flex-row gap-3">
                                    <label><input type='radio' name='transmission' value='Automatic' /> Automatic</label>
                                    <label><input type='radio' name='transmission' value='Manual' /> Manual</label>
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Km driven*</p>
                                <input type="number" min="0" step="1" className="form-control shadow-none ps-3 pe-5 py-2 rounded-3" />
                            </div>

                            <div>
                                <p className='mb-0 mt-2'>No. of owners*</p>
                                <div className='d-flex flex-row gap-3'>
                                    <label><input type='radio' name='owners' value='1st' /> 1st</label>
                                    <label><input type='radio' name='owners' value='2nd' /> 2nd</label>
                                    <label><input type='radio' name='owners' value='3rd' /> 3rd</label>
                                    <label><input type='radio' name='owners' value='4th' /> 4th</label>
                                    <label><input type='radio' name='owners' value='4+' /> 4+</label>
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Price*</p>
                                <input type="text" className="form-control shadow-none ps-3 pe-5 py-2 rounded-3" />
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Description*</p>
                                <textarea className="form-control shadow-none ps-3 pe-5 py-2 rounded-3"></textarea>
                            </div>

                            <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                                <h4>    Upload Images</h4>
                                <p>Add photo</p>
                                <input type="file" multiple accept="image/*" />
                            </div>

                            <div>
                                <p className="mb-0 mt-2">Confirm Location*</p>
                                <select className='form-select'>
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





// store the given details of ads using usestate




