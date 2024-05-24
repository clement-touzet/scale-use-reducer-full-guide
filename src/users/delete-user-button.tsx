import { UserType } from "@/App";
import { Button } from "@/components/ui/button";

type Props = {
  deleteUser: (id: string) => void;
  userId: UserType["id"];
};

const DeleteUserButton = ({ deleteUser, userId }: Props) => {
  const handleDelete = () => {
    deleteUser(userId);
  };
  return (
    <Button variant="destructive" onClick={handleDelete}>
      Supprimer
    </Button>
  );
};

export default DeleteUserButton;
