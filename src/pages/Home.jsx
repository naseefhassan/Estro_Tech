import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "../Context/UserContext";

function Home() {
  const { hideDash } = useContext(Mycontext);
  return (
    <div className="h-screen">
      <Header />
      <Sidebar />
      <div className={`p-3 ${!hideDash ? "ml-0" : "ml-[220px] "}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
