import React from "react";
import { processCommand, checkCommand, commandList } from "src/commands";
import useHistory from "src/store/useHistory";

interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  user: string;
  run?: (command: string) => void;
  commandHistory?: string[];
  type?: "command" | "prompt";
}

const Input: React.FC<InputTypes> = ({
  user,
  run,
  type = "command",
  ...props
}) => {
  const commandRef = React.useRef<HTMLInputElement>(null);
  const {
    command,
    setCommand,
    lastCommandIndex,
    commandLogs,
    setLastCommandIndex,
  } = useHistory();

  // Suggestion
  const suggestCommand = () => {
    const suggest = commandList.find((c) => c.startsWith(command));
    if (suggest) {
      return suggest;
    } else {
      return command;
    }
  };

  // Key events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Unique commands
    if (e.key === "Enter") {
      return processCommand(command);
    } else if (e.key === "Tab") {
      e.preventDefault();
      setCommand(suggestCommand());
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLogs.length) {
        const index = lastCommandIndex + 1;
        if (index <= commandLogs.length) {
          setLastCommandIndex(index);
          setCommand(commandLogs[commandLogs.length - index]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandLogs.length) {
        const index = lastCommandIndex - 1;
        if (index > 0) {
          setLastCommandIndex(index);
          setCommand(commandLogs[commandLogs.length - index]);
        } else {
          setLastCommandIndex(0);
          setCommand("");
        }
      }
    }
  };

  return (
    <div className="flex gap-1 relative">
      {type === "command" && (
        <label className="min-w-max font-medium text-emerald-400">
          {user}: $ ~
        </label>
      )}

      <div className="relative">
        <input
          id="input"
          className={`w-full bg-transparent border-none outline-none caret-white ${
            checkCommand(command) ? "command" : ""
          }`}
          autoFocus
          ref={commandRef}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onBlur={() => commandRef.current?.focus()}
          onKeyDown={handleKeyDown}
          {...props}
        />
        {suggestCommand() !== command && (
          <span className="absolute left-0 -z-10 opacity-40">
            {suggestCommand()}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
