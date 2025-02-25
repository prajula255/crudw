import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterEx from '../components/footer';
import NavEx from '../components/navbar';

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <NavEx />
      <div style={{ backgroundColor: "#eee", padding: "20vh 0", marginLeft: "2vw" }}>
        <div className='row'>
          <div className='col-3 p-4 pt-0'>
            <h2 className='fw-bold'>My Profile</h2>
            <div className='d-flex justify-content-start align-items-center ms-3' style={{ height: "100px" }}>
              <div className='bg-secondary p-4 rounded d-flex align-items-center justify-content-center'>
                <span className='text-white fw-bold'>DP</span>
              </div>
            </div>
            <p className="fw-semibold">Prajula K P</p>
            <p>Member since <span className="fw-light">"registered on"</span></p>
            <button className="fs-5 btn btn-outline-secondary w-100">Edit Profile</button>
          </div>

          <div className='col-9 p-3 pt-5' style={{ minHeight: "20rem" }}>
            <div className='d-flex flex-column gap-3 align-items-center'>
              <div className='d-flex justify-content-center align-items-center' style={{ height: "10rem" }}>
                <i class="fa-solid fa-car" style={{ fontSize: "min(10rem, 15vw)" }}></i>
              </div>
              <p>Nothing listed.</p>
              <button className="fs-5 btn btn-outline-secondary" onClick={() => navigate("/addetails ")}>
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
