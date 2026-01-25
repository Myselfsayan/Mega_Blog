import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-flex items-center justify-center
          text-red-700 p-2 rounded-2xl
          transition-shadow duration-300
          hover:shadow-[0_10px_25px_rgba(239,68,68,0.4)]
         "
    >
    Logout
    </button>
  );
}

export default LogoutBtn;
