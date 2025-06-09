// src/screens/AchievementsScreen.jsx
import React from 'react';
import '../styles/styles.css';

const completedCourses = [
  { id: '1', title: 'Algebra Basics', date: '2024-04-10', percent: 100 },
  { id: '2', title: 'Essay Writing 101', date: '2024-05-20', percent: 100 },
  { id: '3', title: 'Basic Music Theory', date: '2024-06-01', percent: 85 },
];

const AchievementsScreen = () => {
  return (
    <div className="container">
      <h1 className="heading">Achievements</h1>

      {/* Congratulations Banner */}
      <div className="congrats-banner">
        <h2>🎉 Congratulations, John! 🎉</h2>
        <p>You’re doing great—keep up the fantastic work.</p>
      </div>

      {/* Achievements Cards */}
      <div className="achievements-cards">
        {completedCourses.map((course) => (
          <div key={course.id} className="achievement-card">
            {/* Certificate Icon Placeholder */}
            <div className="certificate-icon">📜</div>
            <h3 className="achievement-title">{course.title}</h3>
            <p className="achievement-date">
              Completed on {course.date}
            </p>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.percent}%` }}
              ></div>
            </div>
            <small>{course.percent}% Complete</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsScreen;
