import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="w-full h-4 bg-gray-300 rounded-full ml-[7px]">
      <div
        style={{ width: `${percentage}%` }}
        className="h-full text-[.6rem] text-center text-white bg-blue-500 rounded-full"
      >
        {percentage}%
      </div>
    </div>
  );
}

export default ProgressBar;
