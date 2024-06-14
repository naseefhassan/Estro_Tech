import { useContext } from "react";
import menu from "../../assets/Images/menu.png";
import { Mycontext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { hideDash, setHideDash, head } = useContext(Mycontext);

  const showDash = () => {
    setHideDash(!hideDash);
  };

  return (
    <div>
      <div className="border-b-2 p-1">
        <div className="flex items-center">
          <img
            onClick={showDash}
            className="w-4 h-4 mx-4 cursor-pointer"
            src={menu}
            alt=""
          />
          <h1 className="font-medium ">{head}</h1>
        </div>
      </div>
      <div>
        <div
          className={`bg-slate-50 w-[220px] h-screen fixed transition-transform ease-in-out duration-300 p-5 font-semibold  ${
            hideDash ? "  translate-x-0" : " -translate-x-full"
          }`}
        >
          <Link to={"/"}>
            <h1 className="my-4 cursor-pointer">Dashboard</h1>
          </Link>
          <Link to={"/device"}>
            <h1 className="cursor-pointer">Devices</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
