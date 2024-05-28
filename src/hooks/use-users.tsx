import { UsersContext } from "@/contexts/users-context";
import { useContext } from "react";

export const useUsers = () => {
  const users = useContext(UsersContext);

  if (!users) {
    throw new Error("Error: You must use this hook in a UsersContext Provider");
  }
  return users;
};
