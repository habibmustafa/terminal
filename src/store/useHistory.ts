import { create } from "zustand";

interface UseHistoryTypes {
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

const useHistory = create<UseHistoryTypes>((set) => ({
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
    set((state: UseHistoryTypes) => ({
      lastCommandIndex: 0,
      command: "",
      history: [
        ...state.history,
        {
          id: state.history.length,
          date: new Date(),
          command: state.command,
          output,
        },
      ],
    })),

  clearHistory: () => set({ history: [], command: "", lastCommandIndex: 0 }),
}));

export default useHistory;

export const History = {
  set: (output: string | string[]) => useHistory.getState().setHistory(output),
  clear: () => useHistory.getState().clearHistory(),
  commandLogging: () => useHistory.getState().commandLogging(),
};
