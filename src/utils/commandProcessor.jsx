import { About, Contact, Help, Projects, Skills, Welcome } from "./responses";

export const processCommand = (cmd, setOutput, history) => {
  let lowerCmd = cmd.toLowerCase();
  let response = null;

  // Check for the special case for projects
  let projectName = null;
  const commands = lowerCmd.split(" ");
  if (commands[0] === "projects" && commands.length > 0) {
    projectName = lowerCmd.slice(9);
    lowerCmd = commands[0];
  }
  // Look for matching commands
  switch (lowerCmd) {
    case "":
      response = "";
      break;
    case "help":
      response = <Help />;
      break;
    case "about":
      response = <About />;
      break;
    case "skills":
      response = <Skills />;
      break;
    case "projects":
      response = <Projects projectName={projectName} />;
      break;
    case "contact":
      response = <Contact />;
      break;
    case "welcome":
      response = <Welcome />;
      break;
    case "clear":
      setOutput([]);
      return;

    case "history":
      response = history.map((command, i) => {
        return <div key={i}>{command}</div>;
      });
      break;
    default:
      response = `Command not found: ${cmd}. Type 'help' for available commands.`;
  }

  //   Update all outputs array so that the output component can use it
  setOutput((prevOutput) => [
    ...prevOutput,
    { type: "command", content: cmd },
    { type: "response", content: response },
  ]);
};
