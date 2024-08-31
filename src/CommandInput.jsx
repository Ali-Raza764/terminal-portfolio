// CommandInput.js
import React from "react";

const CommandInput = ({ input, handleInputChange, handleSubmit, inputRef }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-2">
      <span className="text-green-400 mr-2">visitor@ali-terminal:~$</span>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        ref={inputRef}
        className="bg-transparent border-none outline-none flex-grow"
        autoComplete="off"
      />
    </form>
  );
};

export default CommandInput;
