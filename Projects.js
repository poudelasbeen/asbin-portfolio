import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="project-card">
        <h3>Internal Marks Management System</h3>

        <p>
        Built using React, PostgreSQL, HTML, CSS and JavaScript. The system
        allows students to view marks, teachers to add marks and administrators
        to manage the system.
        </p>

      </div>

      <div className="project-card">
        <h3>Weather App</h3>

        <p>
        Android application built with Java and Android Studio that fetches
        weather data from an API and displays temperature, humidity, wind
        speed and other weather details.
        </p>

      </div>

      <div className="project-card">
        <h3>Student Study System</h3>

        <p>
        Developed using Django and SQLite where students can create study
        routines, notes, to-do lists and access learning resources.
        </p>

      </div>

    </section>
  );
}

export default Projects;