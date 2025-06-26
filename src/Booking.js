


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // ✅ Added for navigation
// import './App.css';
// import './booking.css';

// const eventsData = {
//   'Stand Ups': [
//     {
//       title: 'Zakhir Khan Live',
//       type: 'Stand Up Comedy',
//       date: 'Sun, 7 Sep',
//       image: '/images/zk.png',
//       rating: 4.7,
//     },
//     {
//       title: 'Aakash Gupta',
//       type: 'Crowd Work',
//       date: 'Tue, 9 Sep',
//       image: '/images/ak.png',
//       rating: 4.9,
//     },
//   ],
//   'Meet Ups': [
//     {
//       title: 'Startup Networking',
//       type: 'Business Meet',
//       date: 'Mon, 8 Sep',
//       image: '/images/ted.png',
//       rating: 4.6,
//     },
//     {
//       title: 'Tech Talk',
//       type: 'Tech Community',
//       date: 'Wed, 10 Sep',
//       image: '/images/tech.png',
//       rating: 4.8,
//     },
//   ],
//   'Music Events': [
//     {
//       title: 'Rock Night',
//       type: 'Live Concert',
//       date: 'Fri, 12 Sep',
//       image: '/images/ro.png',
//       rating: 4.5,
//     },
//     {
//       title: 'Jazz Evening',
//       type: 'Instrumental',
//       date: 'Sat, 13 Sep',
//       image: '/images/ja.png',
//       // rating: 4.9,
//     },
//   ]
// };

// export default function Booking() {
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('Stand Ups');
//   const navigate = useNavigate(); // ✅

//   const filteredEvents = eventsData[selectedCategory].filter(event =>
//     event.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="booking-page">
//       <header className="booking-header">
//         <img src="/images/ol.png" alt="Profile" className="profile-pic" />
//         <span className="greeting">Good Evening Oliver</span>
//         <span className="bell">🔔</span>
//       </header>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <h3 className="section-title">Categories</h3>
//       <div className="categories">
//         {Object.keys(eventsData).map(category => (
//           <button
//             key={category}
//             className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="cards">
//         {filteredEvents.map((event, index) => (
//           <div className="highlight-card event-highlight" key={index}>
//             <img src={event.image} alt={event.title} />
//             <div className="event-details">
//               <span className="limited">Limited Spots Only</span>
//               <h4>{event.title}</h4>
//               <p>{event.type}</p>
//               <span>{event.date}</span>
//             </div>
//             <button
//               className="add-btn"
//               onClick={() => navigate('/tick', { state: { title: event.title, image: event.image } })} // ✅ updated
//             >
//               +
//             </button>
//           </div>
//         ))}
//       </div>

//       <h3 className="section-title">Laugh & Lounge 🔥🔥</h3>
//       <div className="highlight-card">
//         <img src="/images/ta.png" alt="highlight" />
//         <div>
//           <span className="limited">Limited Spots Only</span>
//           <h4>Meet & Greet Add-on with Tanmay !!</h4>
//           <p>"Tanmay Bhatt Exclusive !!"</p>
//         </div>
//         <button
//           className="add-btn"
//           onClick={() => navigate('/tick', { state: { title: 'Meet & Greet Add-on with Tanmay !!', image: '/images/ta.png' } })} // ✅ updated
//           style={{ position: 'absolute', bottom: '12px', right: '12px' }}
//         >
//           +
//         </button>
//       </div>

//       <footer className="footer">
//         <button className="footer-icon" onClick={() => alert("Go to Home")}>🏠<br />Home</button>
//         <button className="footer-icon" onClick={() => alert("Go to Favorites")}>🤍<br />Favorite</button>
//         <button className="footer-icon" onClick={() => alert("Go to Cart")}>🛒<br />Cart</button>
//         <button className="footer-icon" onClick={() => alert("Go to Profile")}>👤<br />Profile</button>
//       </footer>
//     </div>
//   );
// }



// Booking.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './booking.css';

const eventsData = {
  'Stand Ups': [
    {
      title: 'Zakhir Khan Live',
      type: 'Stand Up Comedy',
      date: 'Sun, 7 Sep',
      image: '/images/zk.png',
      rating: 4.7,
    },
    {
      title: 'Aakash Gupta',
      type: 'Crowd Work',
      date: 'Tue, 9 Sep',
      image: '/images/ak.png',
      rating: 4.9,
    },
  ],
  'Meet Ups': [
    {
      title: 'Startup Networking',
      type: 'Business Meet',
      date: 'Mon, 8 Sep',
      image: '/images/ted.png',
      rating: 4.6,
    },
    {
      title: 'Tech Talk',
      type: 'Tech Community',
      date: 'Wed, 10 Sep',
      image: '/images/tech.png',
      rating: 4.8,
    },
  ],
  'Music Events': [
    {
      title: 'Rock Night',
      type: 'Live Concert',
      date: 'Fri, 12 Sep',
      image: '/images/ro.png',
      rating: 4.5,
    },
    {
      title: 'Jazz Evening',
      type: 'Instrumental',
      date: 'Sat, 13 Sep',
      image: '/images/ja.png',
    },
  ]
};

export default function Booking() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Stand Ups');
  const navigate = useNavigate();

  const filteredEvents = eventsData[selectedCategory].filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="booking-page">
      <header className="booking-header">
        <img src="/images/ol.png" alt="Profile" className="profile-pic" />
        <span className="greeting">Good Evening Oliver</span>
        <span className="bell">🔔</span>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3 className="section-title">Categories</h3>
      <div className="categories">
        {Object.keys(eventsData).map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards">
        {filteredEvents.map((event, index) => (
          <div className="highlight-card event-highlight" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="event-details">
              <span className="limited">Limited Spots Only</span>
              <h4>{event.title}</h4>
              <p>{event.type}</p>
              <span>{event.date}</span>
            </div>
            <button
              className="add-btn"
              onClick={() => navigate('/tick', {
                state: {
                  title: event.title,
                  image: event.image,
                }
              })}
            >
              +
            </button>
          </div>
        ))}
      </div>

      <h3 className="section-title">Laugh & Lounge 🔥🔥</h3>
      <div className="highlight-card">
        <img src="/images/ta.png" alt="highlight" />
        <div>
          <span className="limited">Limited Spots Only</span>
          <h4>Meet & Greet Add-on with Tanmay !!</h4>
          <p>"Tanmay Bhatt Exclusive !!"</p>
        </div>
        <button
          className="add-btn"
          onClick={() =>
            navigate('/tick', {
              state: {
                title: 'Meet & Greet Add-on with Tanmay !!',
                image: '/images/ta.png',
              }
            })
          }
          style={{ position: 'absolute', bottom: '12px', right: '12px' }}
        >
          +
        </button>
      </div>

      <footer className="footer">
        <button className="footer-icon" onClick={() => alert("Go to Home")}>🏠<br />Home</button>
        <button className="footer-icon" onClick={() => alert("Go to Favorites")}>🤍<br />Favorite</button>
        <button className="footer-icon" onClick={() => alert("Go to Cart")}>🛒<br />Cart</button>
        <button className="footer-icon" onClick={() => alert("Go to Profile")}>👤<br />Profile</button>
      </footer>
    </div>
  );
}
