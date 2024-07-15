import React from "react";
// import useLogs from "src/store/useLogs";

interface CommandTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  user: string;
  run?: (command: string) => void;
  commandHistory?: string[];
  type?: "command" | "prompt";
}

const Command: React.FC<CommandTypes> = ({
  user,
  run,
  type = "command",
  ...props
}) => {
  const [command, setCommand] = React.useState("");
  const commandRef = React.useRef<HTMLInputElement>(null);
  // const logs = useLogs((state) => state.logs);
  // const commandHistory = logs.filter((log) => log.command).map((log) => log.command);

  // Key events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCommand("");
      run?.(command);
    }
    if (e.key === "ArrowUp") {
      console.log("arrowUp");
    }
  };

  return (
    <div className="flex gap-1 relative">
      {type === "command" && (
        <label className="min-w-max font-medium text-emerald-400">
          {user}: $ ~
        </label>
      )}

      <input
        className="w-full bg-transparent border-none outline-none"
        autoFocus
        ref={commandRef}
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onBlur={() => commandRef.current?.focus()}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </div>
  );
};

export default Command;
