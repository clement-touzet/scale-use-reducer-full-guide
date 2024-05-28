import Users from "./users/users";
import Providers from "./providers/providers";

export type UserType = {
  id: string;
  name: string;
};

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Providers>
        <Users />
      </Providers>
    </div>
  );
}

export default App;
