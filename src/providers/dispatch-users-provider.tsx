import { DispatchUsersContext } from "@/contexts/dispatch-users-context";
import { ActionType } from "@/reducers/users-reducer";
import { Dispatch } from "react";

const DispatchUsersProvider = ({
  dispatchUsers,
  children,
}: {
  dispatchUsers: Dispatch<ActionType>;
  children: React.ReactNode;
}) => {
  return (
    <DispatchUsersContext.Provider value={dispatchUsers}>
      {children}
    </DispatchUsersContext.Provider>
  );
};

export default DispatchUsersProvider;
