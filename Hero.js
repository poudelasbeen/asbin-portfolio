import React from "react";

function Hero() {
  return (
    <section className="hero">

      <img
        src="/profile.jpg"
        alt="Asbin Poudel"
        className="profile-img"
      />

      <h1>Asbin Poudel</h1>

      <p>
        Computer Engineer
      </p>

      <a href="/Asbin-CV.pdf" download className="btn">
        Download CV
      </a>

      <div className="social">
        <a href="https://github.com/poudelasbeen">GitHub</a>
        <a href="https://linkedin.com/in/poudelasbin">LinkedIn</a>
      </div>

    </section>
  );
}

export default Hero;