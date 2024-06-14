import profile from "../../assets/Images/user.png";
import logout from "../../assets/Images/logout.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className=" flex justify-between p-1 border-b-2">
        <h1 className="font-bold mx-4">Panel0</h1>
        <div className="flex gap-2 mx-4">
          <Link to={"/userDetails"}>
            <img
              className="w-6 h-6 bg-slate-300 rounded-full p-1 cursor-pointer"
              src={profile}
              alt="profile img"
            />
          </Link>
          <Link to={'https://www.estrotech.in/'}>
            <img
              className="w-6 h-6 bg-slate-300 rounded-full p-1 cursor-pointer "
              src={logout}
              alt="Logout img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
