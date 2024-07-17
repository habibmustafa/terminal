import { Commands } from "src/enums";
import { banner, help } from "./templates";
import { CommandHandler } from ".";
import { Terminal } from "src/store/useTerminal";

export const commandHandlers: Record<Commands, CommandHandler> = {
  [Commands.SPACE]: () => {
    Terminal.write("");
  },
  [Commands.CLEAR]: () => {
    Terminal.clear();
  },
  [Commands.CLS]: () => {
    Terminal.clear();
  },
  [Commands.HELP]: () => {
    Terminal.write(help);
  },
  [Commands.LOGIN]: () => {
    Terminal.write(banner);
  },
};