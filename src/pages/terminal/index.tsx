import { useEffect } from "react";
import processCommand from "src/commands";
import { banner } from "src/commands/templates";
import Log from "src/components/Log";
import Command from "src/components/Command";
import useLogs from "src/store/useLogs";
import Typewriter from "src/components/Typewriter";

const user = "habib";

const Terminal = () => {
  const logs = useLogs((state) => state.logs);
  const setLogs = useLogs((state) => state.setLogs);

  const handleCommandRun = (command: string) => {
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
    <div className="terminal min-h-[100svh] h-full max-w-[1294px] mx-auto px-2 py-5 border-x border-neutral-800">
      <Typewriter
        className="mb-4 text-slate-500 text-[4px] sm:text-[6px] md:text-[8px] lg:text-[10px]" // animate-pulse
        text={banner}
        speed={5}
      />
      {logs.map((log, index) => (
        <Log key={index} {...log} />
      ))}

      <Command user={user} run={handleCommandRun} />
      <div className="h-40"></div>
    </div>
  );
};

export default Terminal;

// 0.6125