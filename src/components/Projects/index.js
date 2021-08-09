import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/projectimages/moviereddy.jpg";

function Projects(props) {
  const currentCategory = {
    name: "Projects",
    description:
      "A few projects I have worked on during the course",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
          <img
            src={photo}
            alt="MovieReddy Project"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Projects;