import { useContext, useEffect } from "react";
import { Mycontext } from "../../Context/UserContext";
import DeviceData from "../../Api/deviceData";
import usb from "../../assets/Images/usb.png";
import signal from "../../assets/Images/signal.png";
import battery from "../../assets/Images/battery.png";
import pin from "../../assets/Images/pin.png";
import sim from "../../assets/Images/sim.png";
import { Link } from "react-router-dom";

function Device() {
  const { setHead } = useContext(Mycontext);
  const deviceData = DeviceData;

  useEffect(() => {
    setHead("Device");
  }, []);

  return (
    <>
      <div className="flex gap-2 text-sm font-semibold text-gray-700 flex-wrap">
        {deviceData.map((item) => (
          <Link key={item.deviceName} to={`/devicedata/${item.deviceName}`}>
            <div className="border-2 w-[350px] p-2 cursor-pointer rounded-lg bg-red-200 ">
              <div className="flex justify-between items-center ">
                <h1>{item.deviceName}</h1>
                <div className="flex gap-1">
                  <img className="w-3 h-3 rotate-90" src={usb} alt="usb img" />
                  <img className="w-3 h-3" src={signal} alt="signal img" />
                  <img className="w-3 h-3" src={battery} alt="battery img" />
                </div>
              </div>
              <h1>🛑 Offline</h1>
              <h1 className="flex items-center gap-1">
                <img className="w-3 h-3" src={pin} alt="" />
                Location
              </h1>
              <h1 className="flex items-center gap-1">
                <img className="w-3 h-3" src={sim} alt="" />
                Cell info
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Device;
