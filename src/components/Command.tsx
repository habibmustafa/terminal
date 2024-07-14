import React, { forwardRef } from "react";
// import useLogs from "src/store/useLogs";

interface CommandTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  user: string;
  run?: (command: string) => void;
  commandHistory?: string[];
}

const Command = forwardRef<HTMLInputElement, CommandTypes>(
  ({ user, run, ...props }, ref) => {
    const [command, setCommand] = React.useState("");
    // const logs = useLogs((state) => state.logs);

  // const commandHistory = logs.filter((log) => log.command).map((log) => log.command);

    return (
      <div className="flex gap-1">
        <label className="min-w-max font-medium">{user}: $ ~</label>
        <input
          className="w-full bg-transparent border-none outline-none"
          autoFocus
          ref={ref}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              run?.(command);
              setCommand("");
            }

            if(e.key === "ArrowUp") {
              console.log("arrowUp")
            }

            if(e.key === "ArrowDown") {
            }
            
          }}
          {...props}
        />
      </div>
    );
  }
);
export default Command;
