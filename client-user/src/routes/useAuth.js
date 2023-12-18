import { useSelector } from "react-redux";

export const useUserRole = () => {
    const userRole = localStorage.getItem("role");
  return userRole;
};

export const useIsLoggedIn = () => {
  const isLoggedIn = localStorage.getItem("access_token")?true:false;
  return isLoggedIn;
};