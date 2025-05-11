import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookAppointment.css";
import { FaUser, FaEnvelope, FaClock, FaPaintBrush, FaCalendarAlt } from "react-icons/fa";

const BookAppointment = () => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation("Appointment successfully booked!");
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <h2 className="appointment-title">Book Your Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <FaCalendarAlt />
            <DatePicker
              selected={appointmentDate}
              onChange={handleDateChange}
              className="custom-datepicker"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Select Date"
              required
            />
          </div>
          <div className="form-group">
            <FaClock />
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <FaPaintBrush />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option value="basic">Basic Nail Art</option>
              <option value="gel">Gel Nails</option>
              <option value="acrylic">Acrylic Design</option>
              <option value="custom">Custom Design</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Any special requests?"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
          </div>
          <button type="submit" className="book-btn">Book Now</button>
          {confirmation && (
            <div className="confirmation-message">{confirmation}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
