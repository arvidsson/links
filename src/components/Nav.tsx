import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Nav() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="fixed w-full bg-navbar">
      <div className="h-10 w-full">
        <div className="flex h-full justify-between  border-b">
          <div className="flex justify-start space-x-4 pl-4 font-semibold">
            <button
              className="flex justify-center items-center underline"
              onClick={() => navigate("docs")}
            >
              Docs
            </button>
            <button
              className="flex justify-center items-center underline"
              onClick={() => navigate("backlog")}
            >
              Backlog
            </button>
            <button
              className="flex justify-center items-center underline"
              onClick={() => navigate("boards")}
            >
              Boards
            </button>
          </div>
          {user ? (
            <div className="flex items-center space-x-2 py-2 px-4">
              (<span className="text-sm">{`logged in as ${user?.email}`}</span>)
              <button
                className="text-sm underline font-semibold"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="text-sm underline font-semibold"
              onClick={logOut}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
