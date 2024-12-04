import { create } from "zustand";

interface State {
  student: {
    firstName: string;
    lastName: string;
  };
  updateFirstName: (
    firstName: State["student"]["firstName"],
    lastName: State["student"]["lastName"]
  ) => void;
}

export const useStudentStore = create<State>((set) => ({
  student: {
    firstName: "",
    lastName: "",
  },

  updateFirstName: (firstName, lastName) =>
    set(() => ({
      student: {
        firstName: firstName,
        lastName: lastName,
      },
    })),
}));
