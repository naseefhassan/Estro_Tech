import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DashBoard from "../Components/Dashboards/DashBoard";
import Device from "../Components/Devices/Device";
import Login from "../Components/Account/Login";
import UserDetails from "../Components/Account/UserDetails";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="device" element={<Device/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="userDetails" element={<UserDetails/>}></Route>

        </Route>
      </Routes>
    </>
  );
}

export default UserRouter;
