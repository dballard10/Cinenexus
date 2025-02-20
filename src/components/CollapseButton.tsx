import React from "react";

const CollapseButton = ({ toggleCollapse }: { toggleCollapse: () => void }) => {
  return (
    <button
      onClick={toggleCollapse}
      className="mb-4 w-10 h-10 text-white bg-gray-700 rounded-full flex items-center justify-center"
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default CollapseButton;
