import React from 'react';
import coverImage from "../../assets/cover/Background-Image.jpg";

function About() {
  return (
    <section className="my-5">
  <h1 id="about">I'm attending the Full-Stack Web Development with The University of Texas at Austin coding bootcamp. 
  This six month course is shaping me into a well rounded web developer. Though the course can be very challenging, 
  especially for someone like myself who doesn't have much of a coding background, I keep trying to push through and 
  complete my assignments and projects.</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
  );
}

export default About;