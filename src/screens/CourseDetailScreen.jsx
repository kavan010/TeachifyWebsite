// src/screens/CourseDetailScreen.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const CourseDetailScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [booked, setBooked] = useState(false);

  if (!state || !state.course) {
    return <div className="container">No course selected.</div>;
  }

  const { course } = state;

  return (
    <div className="container">
      <h1 className="heading">{course.title}</h1>
      <p className="course-instructor">Instructor: {course.instructor}</p>
      <p className="course-description">
        This course covers all the essentials to get started in{' '}
        <strong>{course.title.toLowerCase()}</strong>. Expect engaging lessons,
        real‐world examples, and opportunities to practice.
      </p>

      <div className="button-group">
        {/* Book a Call */}
        <button
          className="btn"
          onClick={() => {
            setBooked(true);
            alert('You have booked a call. You can now join.');
          }}
        >
          Book a Call
        </button>

        {/* Join Call (disabled until booked) */}
        <button className="btn" onClick={() => alert('Joining call...')} disabled={!booked}>
          Join Call
        </button>
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default CourseDetailScreen;
