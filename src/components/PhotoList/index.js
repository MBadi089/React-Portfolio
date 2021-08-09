import React, { useState } from 'react';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'MovieReddy',
      category: 'Projects',
      description: 'An application were users can create, edit, and delete a movie review',
    },
    {
      name: 'Health Tracker',
      category: 'Projects',
      description: 'An application were users can select a workout and meal to add to their own schedule',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
      <div>
          <div className="flex-row">
          {currentPhotos.map((image, i) => (
              <img
              src={require(`../../assets/projectimages/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
              />
          ))}
      </div>
    </div>
  );
};

export default PhotoList;