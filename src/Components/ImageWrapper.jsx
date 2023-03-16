import React from "react";

const ImageWrapper = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover h-48 w-96 rounded-md shadow-sm shadow-secondary"
    />
  );
};

export default ImageWrapper;
