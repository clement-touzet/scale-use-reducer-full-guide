import { UserType } from "../App";
import NewUserForm from "./new-user-form";
import User from "./user";

type Props = {
  users: UserType[];
  createUser: (name: string) => void;
  deleteUser: (id: string) => void;
  updateUser: (name: string, id: string) => void;
};

const Users = ({ users, createUser, deleteUser, updateUser }: Props) => {
  return (
    <div className="max-w-xl mt-12">
      <p className="mb-8 font-bold">
        Cas normal (avec un useState) pour gérer la liste des utilisateurs
      </p>
      <NewUserForm createUser={createUser} />
      <h1 className="h1 font-bold text-3xl mb-2">Liste des utilisateurs</h1>
      <div className="flex flex-col gap-1">
        {users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              updateUser={updateUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
