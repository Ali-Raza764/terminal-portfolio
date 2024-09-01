const Welcome = () => {
  return (
    <div>
      <pre className="text-green-400 mb-5 font-mono whitespace-pre">
        {`
      _    _ _   ____                   _  ___          _ _     _ 
     / \\  | (_) |  _ \\ __ _ ______ _   | |/ / |__   __ _| (_) __| |
    / _ \\ | | | | |_) / _\` |_  / _\` |  | ' /| '_ \\ / _\` | | |/ _\` |
   / ___ \\| | | |  _ < (_| |/ / (_| |  | . \\| | | | (_| | | | (_| |
  /_/   \\_\\_|_| |_| \\_\\__,_/___\\__,_|  |_|\\_\\_| |_|\\__,_|_|_|\\__,_|
      `}
      </pre>
      <div className="mb-5 text-gray-300">
        <p>Welcome to Ali Raza Khalid's terminal portfolio. (Version 1.0.0)</p>
        <p className="mt-2">
          This project's source code can be found in this project's{" "}
          <a
            href="https://github.com/Ali-Raza764/terminal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 underline"
          >
            Github repo
          </a>
          .
        </p>
        <p className="mt-2">
          For a list of available commands, type{" "}
          <span className="text-green-400">'help'</span>.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
