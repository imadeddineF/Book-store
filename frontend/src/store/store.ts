import { create } from "zustand";

type State = {
  edit: boolean;
  editedBookId: string | null;
  editedBookName: string;
  editedBookAuthor: string;
  editedBookRate: number;
  setEdit: (
    edit: boolean,
    id?: string,
    name?: string,
    author?: string,
    rate?: number
  ) => void;
};

export const useEditBook = create<State>((set) => ({
  edit: false,
  editedBookId: null,
  editedBookName: "",
  editedBookAuthor: "",
  editedBookRate: 0,
  setEdit: (edit, id, name, author, rate) =>
    set({
      edit,
      editedBookId: id || null,
      editedBookName: name,
      editedBookAuthor: author,
      editedBookRate: rate,
    }),
}));
