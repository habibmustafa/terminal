import React, { useEffect } from "react";
import processCommand from "src/commands";
import { welcome } from "src/commands/templates";
import Log from "src/components/Log";
import Command from "src/components/Command";
import useLogs from "src/store/useLogs";

const user = "habib";

const Terminal = () => {
  const commandRef = React.useRef<HTMLInputElement>(null);
  const logs = useLogs((state) => state.logs);
  const setLogs = useLogs((state) => state.setLogs);

  const handleCommandRunr = (command: string) => {
    const result = processCommand(command);
    if (result !== null) {
      setLogs({ user, command, result });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
    });
  }, [logs]);

  return (
    <div
      className="terminal h-[100svh] px-20 py-5"
      onClick={() => commandRef.current?.focus()}
    >
      <div className="text-3xl mb-5">{welcome}</div>

      {logs.map((log, index) => (
        <Log key={index} {...log} />
      ))}

      <Command ref={commandRef} user={user} run={handleCommandRunr} />
      <div className="h-40"></div>
    </div>
  );
};

export default Terminal;
