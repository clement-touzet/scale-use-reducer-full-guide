import { UserType } from "@/App";
import { v4 as uuidv4 } from "uuid";

export enum ACTION {
  ADD = "add",
  DELETE = "delete",
  UPDATE = "udpate",
}

export type ActionType = AddAction | DeleteAction | UpdateAction;

type AddAction = {
  type: ACTION.ADD;

  name: UserType["name"];
};

type DeleteAction = {
  type: ACTION.DELETE;

  id: UserType["id"];
};

type UpdateAction = {
  type: ACTION.UPDATE;

  id: UserType["id"];
  name: UserType["name"];
};

export const usersReducer = (users: UserType[], action: ActionType) => {
  const createUser = (name: string) => {
    // créé un nouvel utilisateur
    const uuid = uuidv4();
    const newUser = {
      id: uuid,
      name: name,
    };
    return [...users, newUser];
  };

  const deleteUser = (id: string) => {
    const oldUsersCopy = [...users];
    const newUsers = oldUsersCopy.filter((user) => user.id !== id);
    return newUsers;
  };

  const updateUser = (id: string, name: string) => {
    const updatedUsers = users.map((user) => {
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
  };

  switch (action.type) {
    case ACTION.ADD:
      return createUser(action.name);
    case ACTION.DELETE:
      return deleteUser(action.id);
    case ACTION.UPDATE:
      return updateUser(action.id, action.name);
  }
  return [...users];
};
