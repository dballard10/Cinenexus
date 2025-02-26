import React, { useState } from "react";

const Sort = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const options = ["Alphabetical", "Recent", "Rating"];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(event.target.value);
  };

  return (
    <div className="gap-2">
      <select
        id="sort-select"
        value={selectedPlatform}
        onChange={handleChange}
        className="bg-gray-800 text-white border border-gray-700 w-64 p-2 pr-10 rounded-md"
      >
        <option value="">Sort By</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
