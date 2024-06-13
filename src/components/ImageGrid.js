import React from 'react';
import ImageTextOverlay from './ImageTextOverlay';
import ImageOne from '../ui/assets/atletaSeis.jpg';
import ImageTwo from '../ui/assets/atletaTres.jpg';
import ImageThree from '../ui/assets/atletaQuatro.jpg';

const ImageGrid = () => {
  const images = [
    {
      src: ImageOne,
      alt: 'ImageOne',
      description: 'Exercício'
    },
    {
      src: ImageTwo,
      alt: 'ImageTwo',
      description: 'Exercício'
    },
    {
      src: ImageThree,
      alt: 'ImageThree',
      description: 'Exercício'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl mt-12">
      {images.map((image, index) => (
        <ImageTextOverlay
          key={index}
          src={image.src}
          alt={image.alt}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
