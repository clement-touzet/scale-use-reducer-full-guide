import { UserType } from "@/App";
import { Button } from "@/components/ui/button";
import { useDispatchUsers } from "@/hooks/use-dispatch-users";
import { ACTION } from "@/reducers/users-reducer";

type Props = {
  userId: UserType["id"];
};

const DeleteUserButton = ({ userId }: Props) => {
  const dispatchUsers = useDispatchUsers();

  const handleDelete = () => {
    dispatchUsers({ type: ACTION.DELETE, id: userId });
  };
  return (
    <Button variant="destructive" onClick={handleDelete}>
      Supprimer
    </Button>
  );
};

export default DeleteUserButton;
