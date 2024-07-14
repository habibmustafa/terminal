import { Commands } from "src/enums";
import useLogs from "src/store/useLogs";

type CommandHandler = () => string | null;

export const commandHandlers: Record<Commands, CommandHandler> = {
  [Commands.SPACE]: () => "",
  [Commands.HELP]: () => "Bu bir yardım metni olabilir.",
  [Commands.CLEAR]: () => {
    useLogs.getState().clearLogs();
    return null;
  },
  [Commands.CLS]: () => {
    useLogs.getState().clearLogs();
    return null;
  },
};
