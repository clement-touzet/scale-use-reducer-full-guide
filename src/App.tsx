import { useReducer } from "react";
import Users from "./users/users";
import { v4 as uuidv4 } from "uuid";
import { usersReducer } from "./reducers/users-reducer";

export type UserType = {
  id: string;
  name: string;
};

const initialUsers = [
  { id: uuidv4(), name: "Alex" },
  { id: uuidv4(), name: "Baba" },
];

function App() {
  const [users, dispatchUsers] = useReducer(usersReducer, initialUsers);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Users users={users} dispatchUsers={dispatchUsers} />
    </div>
  );
}

export default App;
