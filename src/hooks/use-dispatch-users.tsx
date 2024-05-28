import { DispatchUsersContext } from "@/contexts/dispatch-users-context";
import { useContext } from "react";

export const useDispatchUsers = () => {
  const dispatchUsers = useContext(DispatchUsersContext);

  if (!dispatchUsers) {
    throw new Error(
      "Error: You must use this hook in a DispatchUsersContext Provider"
    );
  }

  return dispatchUsers;
};
