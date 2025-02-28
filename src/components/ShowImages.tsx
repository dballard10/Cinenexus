import React from "react";

interface ShowImagesProps {
  image: string;
  title: string;
}

const ShowImages = ({ image, title }: ShowImagesProps) => {
  return <img src={image} alt={title} />;
};

export default ShowImages;
