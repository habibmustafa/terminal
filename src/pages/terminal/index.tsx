import { banner } from "src/commands/templates";
import History from "src/components/History";
import Typewriter from "src/components/Typewriter";
import Input from "src/components/Input";

const user = "habib";

const Terminal = () => {
  return (
    <div className="terminal min-h-[100svh] h-full max-w-[1294px] mx-auto px-2 py-5 border-x border-neutral-800">
      <Typewriter
        className="mb-4 text-slate-500 text-[4px] sm:text-[6px] md:text-[8px] lg:text-[10px]" // animate-pulse
        text={banner}
        speed={5}
      />
        <History />

      <Input user={user} />
      <div className="h-40"></div>
    </div>
  );
};

export default Terminal;

// 0.6125
