import React from "react";
import { LogType } from "src/types";



const Log: React.FC<LogType> = ({ user, command, result }) => {
  return (
    <div>
      <div className="flex gap-1">
        <span className="min-w-max font-medium">{user}: $ ~</span>
        <span>{command}</span>
      </div>
      {result && <div className="mb-2">{result}</div>}
    </div>
  );
};

export default Log;