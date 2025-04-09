import { X } from "lucide-react";

interface FilterTagProps {
  label: string;
}

const FilterTag = ({ label }: FilterTagProps) => {
  const handleRemove = () => {
    console.log("remove");
  };

  return (
    <div className="bg-gray-800 text-white px-2 py-1 rounded-md flex items-center gap-2 group">
      {label}
      <button
        onClick={handleRemove}
        className="text-gray-400 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FilterTag;
