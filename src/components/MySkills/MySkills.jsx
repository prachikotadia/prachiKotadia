import React from 'react';
import './MySkills.css';

const skillsData = {
  'Programming Languages': [
    { name: 'Python', percentage: 85 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'C', percentage: 70 }
  ],
  'Scripting Languages': [
    { name: 'Bash', percentage: 80 },
    { name: 'Python', percentage: 85 }
  ],
  'Frameworks': [
    { name: 'React', percentage: 90 },
    { name: 'Flutter', percentage: 75 },
    { name: 'Django', percentage: 85 }
  ],
  'Databases': [
    { name: 'MySQL', percentage: 80 }
  ],
  'Software/Tools': [
    { name: 'VSCode', percentage: 95 },
    { name: 'PyCharm', percentage: 90 },
    { name: 'Git', percentage: 85 }
  ],
  'Other': [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 }
  ],

};

const MySkills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <div className="category-box">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-box" style={{ '--progress-percentage': `${skill.percentage}%` }}>
                  <p>{skill.name}</p>
                  <div className="progress-overlay"></div>
                  <span className="percentage">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
