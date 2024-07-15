import { Commands } from "src/enums";
import useLogs from "src/store/useLogs";
import { LogType } from "src/types";
import { help } from "./templates";

type CommandHandler = () => LogType["result"];

export const commandHandlers: Record<Commands, CommandHandler> = {
  [Commands.SPACE]: () => "",
  [Commands.HELP]: () => help,
  [Commands.CLEAR]: () => {
    useLogs.getState().clearLogs();
    return null;
  },
  [Commands.CLS]: () => {
    useLogs.getState().clearLogs();
    return null;
  },
};
