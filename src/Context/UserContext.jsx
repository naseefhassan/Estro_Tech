/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const Mycontext = createContext();
function UserContext({ children }) {
  const [hideDash, setHideDash] = useState(false);
  const [head, setHead] = useState("");
  return (
    <Mycontext.Provider value={{ hideDash, setHideDash, head, setHead }}>
      {children}
    </Mycontext.Provider>
  );
}

export { Mycontext };
export default UserContext;
