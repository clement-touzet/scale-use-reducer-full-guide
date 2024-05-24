import { useState } from "react";
import Users from "./users/users";
import { v4 as uuidv4 } from "uuid";

export type UserType = {
  id: string;
  name: string;
};

function App() {
  const [users, setUsers] = useState<UserType[]>([
    { id: uuidv4(), name: "Alex" },
    { id: uuidv4(), name: "Baba" },
  ]);

  const createUser = (name: string) => {
    // créé un nouvel utilisateur
    const uuid = uuidv4();
    setUsers((oldUsers) => {
      const newUser = {
        id: uuid,
        name: name,
      };
      return [...oldUsers, newUser];
    });
  };

  const deleteUser = (id: string) => {
    setUsers((oldUsers) => {
      const oldUsersCopy = [...oldUsers];
      const newUsers = oldUsersCopy.filter((user) => user.id !== id);
      return newUsers;
    });
  };

  const updateUser = (id: string, name: string) => {
    setUsers((oldUsers) => {
      const updatedUsers = oldUsers.map((user) => {
        // modifie uniquement l'utilisateur ayant comme id "id" dans la liste des utilisateurs
        if (user.id === id) {
          const updatedUser = {
            ...user,
            name: name,
          };
          return updatedUser;
        } else {
          return user;
        }
      });
      return updatedUsers;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Users
        users={users}
        createUser={createUser}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>
  );
}

export default App;
