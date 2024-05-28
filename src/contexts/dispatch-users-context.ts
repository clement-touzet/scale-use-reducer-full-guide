import { ActionType } from "@/reducers/users-reducer";
import { Dispatch } from "react";
import { createContext } from "react";

export const DispatchUsersContext = createContext<Dispatch<ActionType> | null>(
  null
);
