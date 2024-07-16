import { Commands } from "src/enums";
import { commandHandlers } from "./handlers";
import { History } from "src/store/useHistory";

export type CommandHandler = () => void;

export const processCommand = (input: string) => {
  const command = input.trim().toLowerCase();

  !!command && History.commandLogging();

  const commandHandler = commandHandlers[command as Commands];
  if (commandHandler) {
    return commandHandler();
  } else {
    return History.set(
      `"${command}" not found. For a list of available commands, type '<span class='commander'>help</span>'.`
    );
  }
};


export const commandList = Object.keys(commandHandlers)
export const checkCommand = (command: string) => commandList.includes(command.toLowerCase())
