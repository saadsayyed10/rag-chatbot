import { create } from "zustand";

interface SignUpStore {
  firstName: string;
  lastName: string;
  email: string;

  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;

  reset: () => void;
}

export const useSignUp = create<SignUpStore>((set) => ({
  firstName: "",
  lastName: "",
  email: "",

  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),

  reset: () => {
    set({
      firstName: "",
      lastName: "",
      email: "",
    });
  },
}));
