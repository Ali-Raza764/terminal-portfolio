// Output.js
import React from "react";

const Output = ({ output }) => {
  return (
    <div>
      {output.map((item, index) => (
        <div key={index}>
          {item.type === "command" ? (
            <div className="flex">
              <span className="text-green-400 mr-2">
                visitor@ali-terminal:~$
              </span>
              <span>{item.content}</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap text-gray-300 mt-1 ml-4 pl-4 border-l-2 border-green-400">
              {typeof item.content === "string" ? item.content : item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Output;
