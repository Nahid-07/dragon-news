
import { Outlet } from "react-router";
import Navbar from "../components/NavBar";

export const AuthLayout = () => {
  return (
    <div className="bg-[#f3f3f3] h-screen">
      <header className="py-3">
        <Navbar></Navbar>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
