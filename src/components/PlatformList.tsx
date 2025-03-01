import React, { useState } from "react";
import Platform from "./Platform";

const PlatformList = () => {
  const platforms = [
    "Netflix",
    "Hulu",
    "Amazon Prime",
    "Disney+",
    "HBO Max",
    "Apple TV+",
    "Peacock",
    "Paramount+",
    "Showtime",
    "Starz",
    "Crunchyroll",
  ];

  return (
    <div className="flex flex-col gap-2">
      {platforms.map((platform) => (
        <Platform key={platform} name={platform} />
      ))}
    </div>
  );
};

export default PlatformList;
