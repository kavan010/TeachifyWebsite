// src/screens/ProfileScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

// Example enrolled courses data
const enrolledCourses = [
  { id: '1', title: 'Algebra Basics', progress: 40 },
  { id: '2', title: 'Intro to Physics', progress: 70 },
];

const ProfileScreen = () => {
  return (
    <div className="container">
      <h1 className="heading">My Profile</h1>

      <div className="profile-card">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-email">johndoe@example.com</p>
        <p className="profile-role">Student</p>
      </div>

      <div className="profile-details">
        <h3>Enrolled Courses</h3>
        <div className="course-list">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="course-card profile-course-card">
              <Link to={`/course/${course.id}`} className="course-title link">
                {course.title}
              </Link>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%`, backgroundColor: 'limegreen' }}
                ></div>
              </div>
              <small>{course.progress}% Complete</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
