import React from "react";

const AboutImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover max-h-48 w-96 rounded-md shadow-sm shadow-secondary"
    />
  );
};

export default AboutImage;
