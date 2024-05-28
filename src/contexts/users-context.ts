import { UserType } from "@/App";
import { createContext } from "react";

export const UsersContext = createContext<UserType[] | null>(null);
