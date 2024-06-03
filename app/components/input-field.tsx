import React from "react";

const InputField = ({ ...otherProps }: any) => {
  return (
    <input
      className="bg-gray-50 border font-serif border-emerald-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-emerald-900 block w-full p-2.5"
      {...otherProps}
    />
  );
};

export default InputField;
