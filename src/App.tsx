import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <div>
      <Nav />
      <div className="flex justify-between h-screen overflow-y-hidden w-full pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
