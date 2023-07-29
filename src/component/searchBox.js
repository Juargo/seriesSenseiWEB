import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="flex justify-center mt-[5px]">
      <input
        className="p-[5px] text-[.7rem] font-light text-black"
        type="search"
        placeholder="search anime by name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
