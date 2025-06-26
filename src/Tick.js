// // // Tick.js
// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './tick.css';
// // import './App.css';



// // export default function Tick() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { title, image } = location.state || {};

// //   const [selectedPass, setSelectedPass] = useState(null);
// //   const [ticketCounts, setTicketCounts] = useState({ Rs300: 0, Rs500: 0, Rs700: 0 });

// //   const handleSelect = (pass) => {
// //     setSelectedPass(pass);
// //   };

// //   const handleIncrement = (key) => {
// //     setTicketCounts((prev) => ({ ...prev, [key]: prev[key] + 1 }));
// //   };

// //   const getTotal = () => {
// //     return ticketCounts.Rs300 * 300 + ticketCounts.Rs500 * 500 + ticketCounts.Rs700 * 700;
// //   };

// //   return (
// //     <div className="ticket-page">
// //       <img src={image} alt={title} className="event-image" />
// //       <div className="content-box">
// //         <h2>{title}</h2>
// //         <p>Meme Reacts</p>

// //         <h3>Select Tickets</h3>
// //         <div className="ticket-options">
// //           {['Rs300', 'Rs500', 'Rs700'].map((price) => (
// //             <div
// //               key={price}
// //               className={`ticket-option ${selectedPass === price ? 'selected' : ''}`}
// //               onClick={() => handleSelect(price)}
// //             >
// //               <span>{price.replace('Rs', 'Rs ')}</span>
// //               <button onClick={(e) => { e.stopPropagation(); handleIncrement(price); }}>+
// //                 {ticketCounts[price] > 0 && <span className="count">{ticketCounts[price]}</span>}
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         <h3>About</h3>
// //         <p>
// //           After the show, head backstage for a relaxed hangout filled with laughs,
// //           quick selfies, and candid convo with the comedy legend himself.
// //           Limited spots available, so grab your VIP pass before it's gone!
// //         </p>

// //         <button className="proceed-btn" onClick={() => navigate('/next')}>Proceed to Pay | Rs. {getTotal()}</button>
// //       </div>
// //     </div>
// //   );
// // }



// // Tick.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './tick.css';
// import './App.css';

// export default function Tick() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { title, image } = location.state || {};

//   const [selectedPass, setSelectedPass] = useState(null);
//   const [ticketCounts, setTicketCounts] = useState({ Rs300: 0, Rs500: 0, Rs700: 0 });

//   const handleSelect = (pass) => {
//     setSelectedPass(pass);
//   };

//   const handleIncrement = (key) => {
//     setTicketCounts((prev) => ({
//       ...prev,
//       [key]: prev[key] + 1
//     }));
//   };

//   const getTotal = () => {
//     return (
//       ticketCounts.Rs300 * 300 +
//       ticketCounts.Rs500 * 500 +
//       ticketCounts.Rs700 * 700
//     );
//   };

//   if (!title || !image) {
//     return (
//       <div className="ticket-page">
//         <h2>No event selected</h2>
//         <button onClick={() => navigate('/booking')}>Back to Booking</button>
//       </div>
//     );
//   }

//   return (
//     <div className="ticket-page">
//       <img src={image} alt={title} className="event-image" />
//       <div className="content-box">
//         <h2>{title}</h2>
//         <p>Meme Reacts</p>

//         <h3>Select Tickets</h3>
//         <div className="ticket-options">
//           {['Rs300', 'Rs500', 'Rs700'].map((price) => (
//             <div
//               key={price}
//               className={`ticket-option ${selectedPass === price ? 'selected' : ''}`}
//               onClick={() => handleSelect(price)}
//             >
//               <span>{price.replace('Rs', 'Rs ')}</span>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleIncrement(price);
//                 }}
//               >
//                 +
//                 {ticketCounts[price] > 0 && (
//                   <span className="count">{ticketCounts[price]}</span>
//                 )}
//               </button>
//             </div>
//           ))}
//         </div>

//         <h3>About</h3>
//         <p>
//           After the show, head backstage for a relaxed hangout filled with laughs,
//           quick selfies, and candid convo with the comedy legend himself.
//           Limited spots available, so grab your VIP pass before it's gone!
//         </p>

//         <button
//           className="proceed-btn"
//           onClick={() => {
//             if (getTotal() > 0) {
//               navigate('/next', { state: { title, total: getTotal() } });
//             } else {
//               alert("Please select at least one ticket.");
//             }
//           }}
//         >
//           Proceed to Pay | Rs. {getTotal()}
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './tick.css';
import './App.css';

export default function Tick() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image } = location.state || {};

  const [selectedPass, setSelectedPass] = useState(null);
  const [ticketCounts, setTicketCounts] = useState({ Rs300: 0, Rs500: 0, Rs700: 0 });

  const [showPopup, setShowPopup] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSelect = (pass) => {
    setSelectedPass(pass);
  };

  const handleIncrement = (key) => {
    setTicketCounts((prev) => ({
      ...prev,
      [key]: prev[key] + 1
    }));
  };

  const getTotal = () => {
    return (
      ticketCounts.Rs300 * 300 +
      ticketCounts.Rs500 * 500 +
      ticketCounts.Rs700 * 700
    );
  };

  const handlePayment = () => {
    if (getTotal() <= 0) {
      alert("Please select at least one ticket.");
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2500); // Show success after 2.5s
  };

  if (!title || !image) {
    return (
      <div className="ticket-page">
        <h2>No event selected</h2>
        <button onClick={() => navigate('/booking')}>Back to Booking</button>
      </div>
    );
  }

  return (
    <div className="ticket-page">
      <img src={image} alt={title} className="event-image" />
      <div className="content-box">
        <h2>{title}</h2>
        <p>Meme Reacts</p>

        <h3>Select Tickets</h3>
        <div className="ticket-options">
          {['Rs300', 'Rs500', 'Rs700'].map((price) => (
            <div
              key={price}
              className={`ticket-option ${selectedPass === price ? 'selected' : ''}`}
              onClick={() => handleSelect(price)}
            >
              <span>{price.replace('Rs', 'Rs ')}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleIncrement(price);
                }}
              >
                +
                {ticketCounts[price] > 0 && (
                  <span className="count">{ticketCounts[price]}</span>
                )}
              </button>
            </div>
          ))}
        </div>

        <h3>About</h3>
        <p>
          After the show, head backstage for a relaxed hangout filled with laughs,
          quick selfies, and candid convo with the comedy legend himself.
          Limited spots available, so grab your VIP pass before it's gone!
        </p>

        <button className="proceed-btn" onClick={handlePayment}>
          Proceed to Pay | Rs. {getTotal()}
        </button>
      </div>

      {showPopup && (
        <div className="payment-popup">
          {!paymentSuccess ? (
            <>
              <div className="loader"></div>
              <p>Processing Payment...</p>
            </>
          ) : (
            <>
              <div className="success-icon">✔</div>
              <p>Payment Successful!</p>
              <button
                className="view-ticket-btn"
                onClick={() => navigate('/dow')}
              >
                View Ticket
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
