import { Commands } from "src/enums";
import { commandHandlers } from "./handlers";
import { LogType } from "src/types";

const processCommand = (input: string): LogType["result"] => {
  const command = input.trim().toLowerCase();

  const commandHandler = commandHandlers[command as Commands];
  if (commandHandler) {
    return commandHandler();
  } else {
    return `"${command}" not found. For a list of available commands, type '<span id='commander'>help</span>'.`;
  }
};

export default processCommand;
