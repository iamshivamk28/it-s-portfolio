import React from 'react';
import './TechStack.css'

const TechStack = () => {
  return (
   <section className="tech-stack-section">
      <div className="tech-stack-container">
        <div className="tech-category">
          <h2>💻 Developer Tech Stack</h2>
          <ul>
            <li>HTML5</li>  
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className="tech-category">
          <h2>🎬 Video Editor Tools</h2>
          <ul>
            <li>Filmora</li>
            <li>Adobe After Effects</li>
            <li>Color Grading (Manual)</li>
            <li>Canva</li>
            <li>PicsArt</li>
            <li>Runway (AI Tool)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
