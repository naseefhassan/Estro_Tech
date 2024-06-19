import { useParams } from "react-router-dom";
import deviceData from "../../Api/deviceData";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../Context/UserContext";
import usb from "../../assets/Images/usb.png";
import battery from "../../assets/Images/battery.png";
import pin from "../../assets/Images/pin.png";
import sim from "../../assets/Images/sim.png";
import Graph from "../Dashboards/Graph";

function ShowDevice() {
  const DeviceData = deviceData;
  const { deviceId } = useParams();
  const [device, setDevice] = useState(null);
  const {setHead} = useContext(Mycontext)


  useEffect(()=>{
    setHead(`Device > ${deviceId}`)
  },[])

  useEffect(() => {
    const matchedData = DeviceData.find((data) => data.deviceName === deviceId);
    setDevice(matchedData);
  }, [deviceId, DeviceData]);

  if (!device) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className=" flex gap-3 justify-between  text-[12px]">
        <div className="border-2 rounded-md w-96 p-2">
          <h1>{device.deviceName}</h1>
          <h1></h1>
          <h1></h1>
        </div>
        <div className="border-2 rounded-md w-96 p-2">
          <h1 className="flex items-center  "> <img className="w-3 h-3" src={pin} alt="" />Location</h1>
          <h1>{device.location.building}</h1>
          <h1>{device.location.city}</h1>
        </div>
        <div className="border-2 rounded-md w-96 p-2">
        <h1 className="flex items-center  "> <img className="w-3 h-3" src={sim} alt="" />Cell Info</h1>
        <h1>{device.hw_data.sim.operator}</h1>
          <h1>{device.hw_data.sim.signalStrength}</h1>
        </div>
        <div className="border-2 rounded-md w-96 p-2">
        <h1 className="flex items-center "> <img className="w-3 h-3 rotate-90" src={usb} alt="" />USB Device</h1>

          <h1></h1>
        </div>
        <div className="border-2 rounded-md w-96 p-2">
        <h1 className="flex items-center  "> <img className="w-3 h-3" src={battery} alt="" />Battery info</h1>

          <h1>{device.hw_data.battery.percentage}</h1>
          <h1>{device.hw_data.battery.temperature}</h1>
        </div>
      </div>
      <div>
        <Graph/>
      </div>
      <div>
       
      </div>
      <div></div>
    </div>
  );
}

export default ShowDevice;
