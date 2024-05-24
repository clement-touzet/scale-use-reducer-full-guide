import { UserType } from "../App";
import NewUserForm from "./new-user-form";
import User from "./user";
import { ActionType } from "@/reducers/users-reducer";

type Props = {
  users: UserType[];
  dispatchUsers: React.Dispatch<ActionType>;
};

const Users = ({ users, dispatchUsers }: Props) => {
  return (
    <div className="max-w-xl mt-12">
      <p className="mb-8 font-bold">
        Cas avec le use reducer pour gérer la liste des utilisateurs
      </p>
      <NewUserForm dispatchUsers={dispatchUsers} />
      <h1 className="h1 font-bold text-3xl mb-2">Liste des utilisateurs</h1>
      <div className="flex flex-col gap-1">
        {users.map((user) => {
          return (
            <User key={user.id} user={user} dispatchUsers={dispatchUsers} />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
