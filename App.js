import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Your Name</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Passionate developer with experience in Java, Python, JDBC, JSP, and API testing.
          Enthusiastic about building efficient and scalable software and web applications.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java, Python</li>
          <li>JDBC, JSP</li>
          <li>SQL, Postman API</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>API Testing with Postman:</strong> Validated RESTful APIs using assertions and collection runner.</li>
          <li><strong>Student Portal (JSP + JDBC):</strong> Developed CRUD features and backend connectivity with MySQL.</li>
          <li><strong>Portfolio Website:</strong> Built using React and CSS with responsive layout.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: immahesh2601@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/b-mahesh-babu-8609a628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</p>
        <p>GitHub: https://github.com/maheshbabu2601</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
