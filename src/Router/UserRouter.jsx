import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DashBoard from "../Components/Dashboards/DashBoard";
import Device from "../Components/Devices/Device";
import UserDetails from "../Components/Account/UserDetails";
import ShowDevice from "../Components/Devices/ShowDevice";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="device" element={<Device/>}></Route>
          <Route path="userDetails" element={<UserDetails/>}></Route>
          <Route path="devicedata/:deviceId" element={<ShowDevice/>}></Route>

        </Route>
      </Routes>
    </>
  );
}

export default UserRouter;
