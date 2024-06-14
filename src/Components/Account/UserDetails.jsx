import { useContext, useEffect } from "react";
import profile from "../../assets/Images/user.png";
import { Mycontext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

function UserDetails() {
  const { setHead } = useContext(Mycontext);
  useEffect(() => {
    setHead("User Deatils");
  }, []);
  return (
    <div className="flex  items-center">
      <div className="  w-full    flex flex-col justify-center items-center gap-5">
        <img
          className="w-16 h-16 bg-slate-300 rounded-full p-2 cursor-pointer"
          src={profile}
          alt="profile img"
        />
        <div className="flex flex-col">
          <label htmlFor="username">username</label>
          <input type="text" className=" rounded-lg border-2 w-[300px] px-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input type="email" className="rounded-lg  border-2 w-[300px] px-2" />
        </div>
        <Link to={"https://www.estrotech.in/"}>
          <button className="border-red-500 border px-4 rounded-md text-red-500">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;
