import { create } from "zustand";

type State = {
  edit: boolean;
  setEdit: (edit: boolean) => void;
};

export const useEditBook = create<State>((set) => ({
  edit: false,
  setEdit: (edit) => set(() => ({ edit })),
}));
