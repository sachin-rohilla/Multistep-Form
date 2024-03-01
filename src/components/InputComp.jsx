import React from "react";

const InputComp = ({ type, title, value, placeholder, handleChange }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={title}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className=" h-10 px-3 border-2 border-gray-300 rounded-md w-full focus:border-[#E91E63] focus:outline-none "
        required
      />
    </div>
  );
};

export default InputComp;
