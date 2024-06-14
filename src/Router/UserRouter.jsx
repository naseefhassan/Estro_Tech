import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default UserRouter;
