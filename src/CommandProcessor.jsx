export const processCommand = (cmd, setOutput) => {
    if (cmd.trim() === "") return;
  
    const lowerCmd = cmd.toLowerCase();
    let response = null;
  
    switch (lowerCmd) {
      case "help":
        response = "Available commands: about, skills, projects, contact, welcome, clear";
        break;
      case "about":
        response = "I am a passionate web developer with a focus on creating intuitive and efficient user experiences.";
        break;
      case "skills":
        response = "JavaScript, C++, Python, Git, HTML5, CSS3, React, Next.js, Tailwind CSS, Vite, Node.js, Firebase, Figma, Google Cloud, MongoDB, Redis, Pusher, shadcn, Babel";
        break;
      case "projects":
        response = (
          <div>
            <p>
              <a href="https://github.com/Ali-Raza764/baze" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">
                baze
              </a>
              : A simple website to download and stream high quality music.
            </p>
            {/* Additional projects */}
          </div>
        );
        break;
      case "contact":
        response = "Email: alikillerno@gmail.com\nGitHub: https://github.com/Ali-Raza764";
        break;
      case "welcome":
        response = getStartupText();
        break;
      case "clear":
        setOutput([]);
        return;
      default:
        response = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
  
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "command", content: cmd },
      { type: "response", content: response },
    ]);
  };
  
  const getStartupText = () => {
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
            <a href="https://github.com/Ali-Raza764/terminal-portfolio" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">
              Github repo
            </a>
            .
          </p>
          <p className="mt-2">For a list of available commands, type <span className="text-green-400">'help'</span>.</p>
        </div>
      </div>
    );
  };
  