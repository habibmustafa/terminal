import { LogType } from "src/types";
import { create } from "zustand";

interface UseLogsTypes {
  logs: LogType[];
  setLogs: (log: LogType) => void;
  clearLogs: () => void;
}

const useLogs = create<UseLogsTypes>((set) => ({
  logs: [],
  setLogs: (log: LogType) =>
    set((state: UseLogsTypes) => ({
      logs: [...state.logs, log],
    })),
  clearLogs: () => set({ logs: [] }),
}));

export default useLogs;
