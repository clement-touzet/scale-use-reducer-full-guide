import { UserType } from "@/App";
import { UsersContext } from "@/contexts/users-context";

const UsersProvider = ({
  users,
  children,
}: {
  users: UserType[];
  children: React.ReactNode;
}) => {
  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
