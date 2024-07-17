import { create } from "zustand";

interface UseTerminalTypes {
  command: string;
  lastCommandIndex: number;
  history: {
    id: number;
    command: string;
    date: Date;
    output: string | string[] | null;
  }[];
  commandLogs: string[];

  setCommand: (command: string) => void;
  commandLogging: () => void;
  setLastCommandIndex: (lastCommandIndex: number) => void;
  setHistory: (output: string | string[] | null) => void;
  clearHistory: () => void;
}

const useTerminal = create<UseTerminalTypes>((set) => ({
  command: "",
  lastCommandIndex: 0,
  history: [],
  commandLogs: [],

  setCommand: (command) => set({ command }),
  commandLogging: () =>
    set((state) => {
      const index = state.commandLogs.indexOf(state.command);
      const updatedCommandsLogs = [...state.commandLogs];
      if (index !== -1) {
        updatedCommandsLogs.splice(index, 1);
      }
      updatedCommandsLogs.push(state.command);
      return {
        commandLogs: updatedCommandsLogs,
      };
    }),
  setLastCommandIndex: (lastCommandIndex) => set({ lastCommandIndex }),
  setHistory: (output) =>
    set((state: UseTerminalTypes) => {
      const index = state.commandLogs.indexOf(state.command);
      const updatedCommandsLogs = [...state.commandLogs];
      if (index !== -1) {
        updatedCommandsLogs.splice(index, 1);
      }
      state.command.trim() && updatedCommandsLogs.push(state.command);
      return {
        lastCommandIndex: 0,
        command: "",
        // commandLogs: updatedCommandsLogs,
        history: [
          ...state.history,
          {
            id: state.history.length,
            date: new Date(),
            command: state.command,
            output,
          },
        ],
      };
    }),

  clearHistory: () => set({ history: [], command: "", lastCommandIndex: 0 }),
}));

export default useTerminal;

export const Terminal = {
  set: (output: string | string[]) => useTerminal.getState().setHistory(output),
  write: (output: string | string[]) =>
    useTerminal.getState().setHistory(output),
  clear: () => useTerminal.getState().clearHistory(),
  commandLogging: () => useTerminal.getState().commandLogging(),
  prompt: () => {
    console.log("prompt");
  },
};
