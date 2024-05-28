import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatchUsers } from "@/hooks/use-dispatch-users";
import { ACTION } from "@/reducers/users-reducer";
import { useState } from "react";

const NewUserForm = () => {
  const [newName, setNewName] = useState("");

  const dispatchUsers = useDispatchUsers();

  const resetNewName = () => {
    setNewName("");
  };

  const handleCreateUser = () => {
    if (newName === "") return;
    dispatchUsers({ type: ACTION.ADD, name: newName });
    resetNewName();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <h3 className="h3 font-medium text-lg mb-2">Nouvel utilisateur :</h3>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="name"
          value={newName}
          onChange={handleChange}
        ></Input>
        <Button onClick={handleCreateUser}>create new user</Button>
      </div>
    </div>
  );
};

export default NewUserForm;
