import profile from "../../assets/Images/user.png";
import logout from "../../assets/Images/logout.png";

function Header() {
  return (
    <div>
      <div className=" flex justify-between p-1 border-b-2">
        <h1 className="font-bold mx-4">Panel0</h1>
        <div className="flex gap-2 mx-4">
          <img
            className="w-6 h-6 bg-slate-300 rounded-full p-1 cursor-pointer"
            src={profile}
            alt="profile img"
          />
          <img
            className="w-6 h-6 bg-slate-300 rounded-full p-1 cursor-pointer "
            src={logout}
            alt="Logout img"
          />
        </div>
      </div>
     
    </div>
  );
}

export default Header;
