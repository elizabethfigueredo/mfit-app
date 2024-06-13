import React from 'react';

const ImageTextOverlay = ({ src, alt, title, description }) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="size-36 object-cover rounded-xl" />
      <div className="absolute  inset-0 flex">
        <div className="bg-blue-dark bg-opacity-70 text-white p-4 rounded-xl mt-24 w-36">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextOverlay;