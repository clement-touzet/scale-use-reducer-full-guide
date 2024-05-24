import { Input } from "@/components/ui/input";
import { UserType } from "../App";
import DeleteUserButton from "./delete-user-button";

type Props = {
  user: UserType;
  deleteUser: (id: string) => void;
  updateUser: (name: string, id: string) => void;
};

const User = ({ user, deleteUser, updateUser }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUser(user.id, e.target.value);
  };

  return (
    <div className="flex items-center gap-8 p-4 bg-slate-200 hover:bg-slate-300 rounded">
      <Input
        className="flex-1 bg-transparent border-none"
        value={user.name}
        onChange={handleChange}
      />

      <DeleteUserButton deleteUser={deleteUser} userId={user.id} />
    </div>
  );
};

export default User;
