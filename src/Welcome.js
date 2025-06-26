// import React from "react";
// import "./App.css";

// function Welcome({ onNext }) {
//   return (
//     <div className="welcome-screen">
//       <h1>Welcome to<br />EventBook!</h1>
//       <div className="features">
//         <div className="feature">
//           <div className="icon-circle">📅</div>
//           <h3>Discover<br />Events</h3>
//           <p>Explore a wide range of events to suit your interests.</p>
//         </div>
//         <div className="feature">
//           <div className="icon-circle">🎟️</div>
//           <h3>Book<br />Tickets</h3>
//           <p>Quickly and securely purchase tickets.</p>
//         </div>
//         <div className="feature">
//           <div className="icon-circle">➡️</div>
//           <h3>Seamless<br />Entry</h3>
//           <p>Enjoy a hassle-free check-in at the venue.</p>
//         </div>
//       </div>
//       <div className="dots">● ○ ○</div>
//       <button className="next-button" onClick={onNext}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default Welcome;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <h1>Welcome to<br />EventBook!</h1>
      <div className="features">
        <div className="feature">
          <div className="icon-circle">📅</div>
          <h3>Discover<br />Events</h3>
          <p>Explore a wide range of events to suit your interests.</p>
        </div>
        <div className="feature">
          <div className="icon-circle">🎟️</div>
          <h3>Book<br />Tickets</h3>
          <p>Quickly and securely purchase tickets.</p>
        </div>
        <div className="feature">
          <div className="icon-circle">➡️</div>
          <h3>Seamless<br />Entry</h3>
          <p>Enjoy a hassle-free check-in at the venue.</p>
        </div>
      </div>
      <div className="dots">● ○ ○</div>
      <button className="next-button" onClick={() => navigate("/booking")}>
        Next
      </button>
    </div>
  );
}

export default Welcome;
