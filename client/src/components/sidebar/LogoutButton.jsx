import React from "react";
import { CgLogOut } from "react-icons/cg";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      <CgLogOut
        className="w-8 h-8 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};

export default LogoutButton;
