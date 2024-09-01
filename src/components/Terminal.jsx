import { useEffect, useRef, useState } from "react";
import CommandInput from "./CommandInput";
import { processCommand } from "../utils/commandProcessor";
import Output from "./Output";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);

  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // * For automatically inserting the welcome command
  useEffect(() => {
    inputRef.current.focus();
    processCommand("welcome", setOutput);
  }, []);

  //* For auto scrolling
  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [output]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processCommand(input, setOutput, history);
    input != "history" && setHistory([...history, input]);
    setInput("");
  };

  return (
    <main
      className="bg-slate-800 text-slate-200 font-mono p-5 h-screen overflow-y-auto box-border cursor-text"
      ref={terminalRef}
      onClick={handleFocus}
    >
      <Output output={output} />
      <CommandInput
        input={input}
        inputRef={inputRef}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default Terminal;
