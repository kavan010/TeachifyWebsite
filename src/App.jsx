// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import AchievementsScreen from './screens/AchievementsScreen';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // On mount/update, ensure only the appropriate class is on body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/course/:id" element={<CourseDetailScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/achievements" element={<AchievementsScreen />} />
      </Routes>
    </Router>
  );
}
