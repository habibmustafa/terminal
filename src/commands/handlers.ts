import { Commands } from "src/enums";
import { help } from "./templates";
import { CommandHandler } from ".";
import { History } from "src/store/useHistory";

export const commandHandlers: Record<Commands, CommandHandler> = {
  [Commands.SPACE]: () => {
    History.set("");
  },
  [Commands.CLEAR]: () => {
    History.clear();
  },
  [Commands.CLS]: () => {
    History.clear();
  },
  [Commands.HELP]: () => {
    History.set(help);
  },
  [Commands.LOGIN]: () => {},
};