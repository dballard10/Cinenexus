import React from "react";

interface ShowImagesProps {
  images: string[];
  title: string;
}

const ShowImages = ({ images, title }: ShowImagesProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((image) => (
        <img src={image} alt={title} className="rounded-lg" />
      ))}
    </div>
  );
};

export default ShowImages;
