

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Welcome from "./Welcome";
// import Booking from "./Booking";
// import Tick from "./Tick"; 
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/tick" element={<Tick />} /> {/* ✅ Add this route */}
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Booking from "./Booking";
import Tick from "./Tick";     // ✅ Event ticket selection page
import Dow from "./Dow";       // ✅ Download/view ticket page
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tick" element={<Tick />} />
        <Route path="/dow" element={<Dow />} /> {/* ✅ View/Download Ticket */}
      </Routes>
    </div>
  );
}

export default App;
