import React, { useState } from "react";

const Platforms = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(event.target.value);
    // You can add more logic here based on the selected platform
    console.log(`Selected Platform: ${event.target.value}`);
  };

  return (
    <div className="gap-2">
      <select
        id="platform-select"
        value={selectedPlatform}
        onChange={handleChange}
        className="bg-gray-800 text-white border border-gray-700 w-64 p-2 pr-10 rounded-md"
      >
        <option value="">All</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Platforms;
