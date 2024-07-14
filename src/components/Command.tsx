import React, { forwardRef, useEffect } from "react";
import useLogs from "src/store/useLogs";

interface CommandTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  user: string;
  run?: (command: string) => void;
  commandHistory?: string[];
}

const Command = forwardRef<HTMLInputElement, CommandTypes>(
  ({ user, run, ...props }, ref) => {
    const [command, setCommand] = React.useState({
      value: "",
      index: "",
    });
    const [commandIndex, setCommandIndex] = React.useState(0);
    const logs = useLogs((state) => state.logs);

    console.log(1)

  const commandHistory = logs.filter((log) => log.command).map((log) => log.command);

  

    return (
      <div className="flex gap-1">
        <label className="min-w-max font-medium">{user}: $ ~</label>
        <input
          className="w-full bg-transparent border-none outline-none"
          autoFocus
          ref={ref}
          value={command.value}
          onChange={(e) => setCommand((prev) => ({...prev, value: e.target.value}))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              run?.(command.value);
              setCommand((prev) => ({...prev, value: ""}));
            }

            if(e.key === "ArrowUp") {
              console.log(commandHistory.pop())
              // setCommand(commandHistory.pop())
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
