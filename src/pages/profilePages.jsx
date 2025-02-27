// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import FooterEx from '../components/footer';
// import NavEx from '../components/navbar';

// function ProfilePage() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <NavEx />
//       <div className="container-fluid bg-light min-vh-100 d-flex flex-column">
//         <div className="container flex-grow-1">
//           <div className="row py-5">

//             <div className="col-md-3 p-4">
//               <h2 className="fw-bold">My Profile</h2>
//               <div className="d-flex align-items-center mt-3">
//                 <div className="bg-secondary p-4 rounded d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
//                   <span className="text-white fw-bold">DP</span>
//                 </div>
//               </div>
//               <p className="fw-semibold mt-3">Prajula K P</p>
//               <p className="text-muted">Member since <span className="fw-light">"registered on"</span></p>
//               <button className="btn btn-outline-secondary w-100 mt-3" onClick={"/edit"}>Edit Profile</button>
//             </div>

//             <div className="col-md-9 d-flex flex-column align-items-center justify-content-center text-center">
//               <div className="mb-3">
//                 <i className="fa-solid fa-car text-secondary" style={{ fontSize: "6rem" }}></i>
//               </div>
//               <p className="text-muted">Nothing listed.</p>
//               <button className="btn btn-outline-secondary mt-3 px-4 py-2" onClick={() => navigate("/addetails")}>
//                 Start Selling
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//       <FooterEx />
//     </>
//   );
// }

// export default ProfilePage;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterEx from '../components/footer';
import NavEx from '../components/navbar';

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <NavEx />
      <div className="container-fluid bg-light min-vh-100 d-flex flex-column">
        <div className="container flex-grow-1">
          <div className="row py-5">

            <div className="col-md-3 p-4 border rounded bg-white shadow">
              <h2 className="fw-bold">My Profile</h2>
              <div className="d-flex align-items-center mt-3">
                <div className="bg-secondary p-4 rounded d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                  <span className="text-white fw-bold">DP</span>
                </div>
              </div>
              <p className="fw-semibold mt-3">Prajula K P</p>
              <p className="text-muted">Member since <span className="fw-light">"registered on"</span></p>
              <button className="btn btn-outline-secondary w-100 mt-3" onClick={() => navigate("/edit")}>Edit Profile</button>
            </div>

            <div className="col-md-9 d-flex flex-column align-items-center justify-content-center text-center">
              <div className="mb-3">
                <i className="fa-solid fa-car text-secondary" style={{ fontSize: "6rem" }}></i>
              </div>
              <p className="text-muted">Nothing listed.</p>
              <button className="btn btn-outline-secondary mt-3 px-4 py-2" onClick={() => navigate("/addetails")}>
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
