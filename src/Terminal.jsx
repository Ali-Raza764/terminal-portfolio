// Terminal.js
import React, { useState, useEffect, useRef } from "react";
import CommandInput from "./CommandInput";
import Output from "./Output";
import { processCommand } from "./commandProcessor";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    processCommand("welcome", setOutput);
  }, []);

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [output]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processCommand(input, setOutput);
    setInput("");
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleScroll = () => {
    if (terminalRef.current.scrollTop === 0) {
      // Load more output (Infinite scrolling)
      // Example: setOutput(prevOutput => [...prevOutput, ...moreData]);
    }
  };

  return (
    <div
      ref={terminalRef}
      className="bg-slate-800 text-slate-200 font-mono p-5 h-screen overflow-y-auto box-border cursor-text"
      onClick={handleFocus}
      onScroll={handleScroll}
    >
      <Output output={output} />
      <CommandInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
    </div>
  );
};

export default Terminal;
