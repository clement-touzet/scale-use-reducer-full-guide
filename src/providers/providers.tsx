import { PropsWithChildren, useReducer } from "react";
import DispatchUsersProvider from "./dispatch-users-provider";
import UsersProvider from "./users-provider";
import { usersReducer } from "@/reducers/users-reducer";
import { v4 as uuidv4 } from "uuid";

const initialUsers = [
  { id: uuidv4(), name: "Alex" },
  { id: uuidv4(), name: "Baba" },
];

const Providers = ({ children }: PropsWithChildren) => {
  const [users, dispatchUsers] = useReducer(usersReducer, initialUsers);
  return (
    <UsersProvider users={users}>
      <DispatchUsersProvider dispatchUsers={dispatchUsers}>
        {children}
      </DispatchUsersProvider>
    </UsersProvider>
  );
};

export default Providers;
