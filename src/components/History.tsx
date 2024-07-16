import React, { useEffect } from "react";
import Typewriter from "src/components/Typewriter";
import useHistory from "src/store/useHistory";

const History: React.FC<any> = () => {
  const history = useHistory((state) => state.history);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
    });
  }, [history]);

  return (
    !!history.length && (
      <div className="overflow-hidden">
        {history.map((h) => (
          <div key={h.id}>
            <div className="flex gap-1">
              <span className="min-w-max font-medium text-emerald-400">
                habib: $ ~
              </span>
              <span> {h.command}</span>
            </div>
            {h.output && <Typewriter className="mb-2 ml-3" text={h.output} />}
          </div>
        ))}
      </div>
    )
  );
};

export default History;
