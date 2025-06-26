// Dow.js
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import "./Dow.css";

export default function Dow() {
  const location = useLocation();
  const ticketRef = useRef(null);

  // Fallback values if not passed
  const {
    eventName = "Tanmay Bhatt Exclusive",
    passType = "HAHA GOLD PASS",
    date = "Tue, 16 Sept",
    time = "7:00 PM",
    bookingId = "1SI2JP",
  } = location.state || {};

  const downloadTicket = () => {
    if (!ticketRef.current) return;
    html2canvas(ticketRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "event_ticket.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="dow-container">
      <div className="ticket-card" ref={ticketRef}>
        <h2 className="confirm-text">Booking Confirmed!!</h2>
        <img
          className="qr-image"
          src="/images/qr.png"
          alt="QR Code"
        />
        <div className="ticket-details">
          <h3 className="event-name">{eventName}</h3>
          <p className="event-desc">Meme Reacts</p>
          <p className="event-datetime">
            <strong>{date}</strong> | <strong>{time}</strong>
          </p>
          <p className="pass-type">{passType}</p>
          <p className="booking-id">
            Booking ID : <strong>{bookingId}</strong>
          </p>
        </div>
      </div>
      <button className="download-btn" onClick={downloadTicket}>
        Download Ticket
      </button>

      {/* <footer className="bottom-nav">
        <div className="nav-item">🏠 Home</div>
        <div className="nav-item">♡ Favorite</div>
        <div className="nav-item">🛒 Cart</div>
        <div className="nav-item">👤 Person</div>
      </footer> */}
    </div>
  );
}
