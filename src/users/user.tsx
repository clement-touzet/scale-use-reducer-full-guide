import { Input } from "@/components/ui/input";
import { UserType } from "../App";
import DeleteUserButton from "./delete-user-button";
import { ACTION } from "@/reducers/users-reducer";
import { useDispatchUsers } from "@/hooks/use-dispatch-users";

type Props = {
  user: UserType;
};

const User = ({ user }: Props) => {
  const dispatchUsers = useDispatchUsers();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchUsers({ type: ACTION.UPDATE, id: user.id, name: e.target.value });
  };

  return (
    <div className="flex items-center gap-8 p-4 bg-slate-200 hover:bg-slate-300 rounded">
      <Input
        className="flex-1 bg-transparent border-none"
        value={user.name}
        onChange={handleChange}
      />

      <DeleteUserButton userId={user.id} />
    </div>
  );
};

export default User;
