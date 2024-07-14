import { Commands } from "src/enums";
import { commandHandlers } from "./handlers";

const processCommand = (input: string): string | null => {
  const command = input.trim().toLowerCase();

  const commandHandler = commandHandlers[command as Commands];
  if (commandHandler) {
    return commandHandler();
  } else {
    return `No such command exists: "${command}"`;
  }
};

export default processCommand;