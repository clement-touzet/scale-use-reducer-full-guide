import { UserType } from "@/App";
import { Button } from "@/components/ui/button";
import { ACTION, ActionType } from "@/reducers/users-reducer";

type Props = {
  dispatchUsers: React.Dispatch<ActionType>;
  userId: UserType["id"];
};

const DeleteUserButton = ({ dispatchUsers, userId }: Props) => {
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
