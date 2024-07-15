import React from "react";
import { LogType } from "src/types";
import Typewriter from "src/components/Typewriter";

const Log: React.FC<LogType> = ({ user, command, result }) => {
  return (
    <div>
      <div className="flex gap-1">
        <span className="min-w-max font-medium text-emerald-400">
          {user}: $ ~
        </span>
        <span> {command}</span>
      </div>
      {result && <Typewriter className="mb-2 ml-3" text={result} />}
    </div>
  );
};

export default Log;
