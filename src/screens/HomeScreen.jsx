// src/screens/HomeScreen.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/styles.css';

const allCourses = [
  { id: '1', title: 'Algebra Basics', instructor: 'Mr. Smith' },
  { id: '2', title: 'Intro to Physics', instructor: 'Ms. Johnson' },
  { id: '3', title: 'Essay Writing 101', instructor: 'Dr. Brown' },
  { id: '4', title: 'JavaScript for Beginners', instructor: 'Ms. Patel' },
  { id: '5', title: 'World History Overview', instructor: 'Prof. Garcia' },
  { id: '6', title: 'Digital Photography', instructor: 'Mr. Lee' },
  { id: '7', title: 'Beginner Spanish', instructor: 'Ms. Alvarez' },
  { id: '8', title: 'Introduction to Economics', instructor: 'Dr. Wang' },
  { id: '9', title: 'Basic Music Theory', instructor: 'Mr. Davis' },
  { id: '10', title: 'Advanced Calculus', instructor: 'Dr. Nguyen' },
  { id: '11', title: 'Creative Writing', instructor: 'Ms. Lopez' },
  { id: '12', title: 'Graphic Design Fundamentals', instructor: "Mr. O'Connor" },
  { id: '13', title: 'Introduction to Psychology', instructor: 'Dr. Kumar' },
  { id: '14', title: 'Chemistry Lab Techniques', instructor: 'Ms. Robinson' },
  { id: '15', title: 'Mobile App Development', instructor: 'Mr. Thompson' },
  { id: '16', title: 'Yoga for Beginners', instructor: 'Ms. Sharma' },
  { id: '17', title: 'Basic French Language', instructor: 'Mme. Dubois' },
  { id: '18', title: 'Data Science Essentials', instructor: 'Dr. Evans' },
  { id: '19', title: 'Python Programming', instructor: 'Ms. Brown' },
  { id: '20', title: 'Business Management 101', instructor: 'Mr. Wilson' },
  { id: '21', title: 'Nutrition and Wellness', instructor: 'Ms. Green' },
  { id: '22', title: 'Public Speaking Skills', instructor: 'Dr. Martinez' },
  { id: '23', title: 'Acting Basics', instructor: 'Ms. Carter' },
  { id: '24', title: 'Introduction to AI', instructor: 'Dr. Goldberg' },
  { id: '25', title: 'Environmental Science', instructor: 'Dr. Lee' },
  { id: '26', title: 'Digital Marketing', instructor: 'Ms. Kim' },
  { id: '27', title: 'Basic C++ Programming', instructor: 'Mr. Zhang' },
  { id: '28', title: 'Sociology 101', instructor: 'Prof. Rivera' },
  { id: '29', title: 'Introduction to Philosophy', instructor: 'Dr. Clark' },
  { id: '30', title: 'Art History', instructor: 'Ms. Reynolds' },
  { id: '31', title: 'Robotics Fundamentals', instructor: 'Mr. Park' },
  { id: '32', title: 'Advanced Excel', instructor: 'Ms. Hill' },
  { id: '33', title: 'Introduction to SQL', instructor: 'Mr. Evans' },
  { id: '34', title: 'Digital Illustration', instructor: 'Ms. Foster' },
  { id: '35', title: 'Introduction to Blockchain', instructor: 'Dr. Patel' },
  { id: '36', title: 'Latin for Beginners', instructor: 'Dr. Russo' },
  { id: '37', title: 'Financial Accounting', instructor: 'Ms. Nguyen' },
  { id: '38', title: 'Psychiatric Nursing', instructor: 'Dr. White' },
  { id: '39', title: 'Web Design with HTML & CSS', instructor: 'Ms. Baker' },
  { id: '40', title: 'Intermediate German', instructor: 'Herr. Schmidt' },
  { id: '41', title: '3D Animation Basics', instructor: 'Ms. Woods' },
  { id: '42', title: 'Game Development with Unity', instructor: 'Mr. Ramirez' },
  { id: '43', title: 'Yoga Advanced Techniques', instructor: 'Ms. Patel' },
  { id: '44', title: 'Statistics 101', instructor: 'Dr. Martin' },
  { id: '45', title: 'Creative Coding', instructor: 'Ms. Nguyen' },
  { id: '46', title: 'Interior Design Basics', instructor: 'Ms. Lopez' },
  { id: '47', title: 'Mobile Photography', instructor: 'Mr. Lee' },
  { id: '48', title: 'Floristry Fundamentals', instructor: 'Ms. Hughes' },
  { id: '49', title: 'Sketching and Drawing', instructor: 'Ms. Adams' },
  { id: '50', title: 'Mountaineering Essentials', instructor: 'Mr. Patel' },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchQuery = params.get('search') || '';

  // If there's a search param, do a simple filter on title/instructor
  const courses = allCourses.filter((c) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q)
    );
  });

  const handleCourseClick = (course) => {
    navigate(`/course/${course.id}`, { state: { course } });
  };

  return (
    <div className="container">
      {/* ====== Welcome / Progress Section ====== */}
      <section className="welcome-section">
        <h2 className="welcome-title">Welcome back, User!</h2>
        <p className="welcome-subtitle">Here’s your progress in top courses:</p>
        <div className="progress-widgets">
          <div className="progress-widget">
            <h4>Algebra Basics</h4> 
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
            <small>40% Complete</small>
          </div>
          <div className="progress-widget">
            <h4>Intro to Physics</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '70%' }}></div>
            </div>
            <small>70% Complete</small>
          </div>
          <div className="progress-widget">
            <h4>Essay Writing 101</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
            <small>100% Complete</small>
          </div>
        </div>
      </section>

      {/* ====== Browse Courses ====== */}
      <h1 className="heading">Browse Courses</h1>
      {searchQuery && (
        <p className="search-feedback">Showing results for “{searchQuery}”</p>
      )}
      <div className="course-list">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleCourseClick(course)}
          >
            <h2 className="course-title">{course.title}</h2>
            <p className="course-instructor">Instructor: {course.instructor}</p>
          </div>
        ))}
        {courses.length === 0 && (
          <p className="no-results">No courses match your search.</p>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
