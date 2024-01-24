import { createContext } from "react";
import { User } from "../auth";

export const AuthContext = createContext({
  user: {} as User | null,
  setUser: (user: User) => {},
  logOut: () => {},
  loading: true,
});
