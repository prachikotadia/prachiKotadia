import React, { useState } from 'react';
import './MyCourses.css';

const courses = [
  { name: 'Data Structures & Algorithms', description: 'Arrays, Trees, Sorting, and Graphs.', learned: 'August 2024', details: 'I have learned Arrays for data organization. I have studied Trees for hierarchical structures. I have explored Sorting Algorithms for efficient data arrangement. I have examined Graphs for modeling relationships and paths.' },
  { name: 'Mobile Application and Development', description: 'Building and Designing Mobile Apps', learned: 'February 2024', details: 'I learned to develop mobile applications using various frameworks and tools.' },
  { name: 'Advanced Database Organization', description: 'Efficient Data Management', learned: 'March 2024', details: 'I learned advanced techniques in database design, optimization, and management.' },
  { name: 'Software Project Management', description: 'Managing Software Projects', learned: 'April 2024', details: 'I learned to manage software projects effectively, including planning, execution, and monitoring.' },
  { name: 'Big Data Technology', description: 'Handling Large Datasets', learned: 'May 2024', details: 'I learned to work with big data technologies for processing and analyzing large datasets.' },
  { name: 'Computer Networks', description: 'Networking Fundamentals', learned: 'June 2024', details: 'I learned about network architecture, protocols, and security in computer networks.' },
  { name: 'Software Engineering', description: 'Principles of Software Development', learned: 'July 2024', details: 'I learned software engineering principles, including design patterns and development methodologies.' },
  { name: 'Web Application', description: 'Developing Web-Based Applications', learned: 'August 2024', details: 'I learned to build and deploy web applications using various technologies and frameworks.' },
  { name: 'Science of Programming', description: 'Programming Concepts and Techniques', learned: 'September 2024', details: 'I learned fundamental programming concepts and techniques, focusing on problem-solving and code efficiency.' }
  ];

const MyCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="courses">
      <h2>My Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} onClick={() => handleCourseClick(course)}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <span className="click-here">Click here</span>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedCourse.name}</h3>
            <p>{selectedCourse.details}</p>
            <p><strong>Learned:</strong> {selectedCourse.learned}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyCourses;
