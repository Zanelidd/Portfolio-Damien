import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import BackgroundLayout from "./BackgroundLayout";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
