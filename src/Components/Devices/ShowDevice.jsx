import { useParams } from "react-router-dom";
import deviceData from "../../Api/deviceData";
import { useEffect, useState } from "react";

function ShowDevice() {
  const DeviceData = deviceData;
  const { deviceId } = useParams();
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const matchedData = DeviceData.find((data) => data.deviceName === deviceId);
    setDevice(matchedData);
  }, [deviceId, DeviceData]);

  if (!device) {
    return <div>Loading...</div>;
  }

  console.log('');

  return (
    <div>
      <div className="bg-slate-200 flex justify-between">
        <div>
          <h1>{device.deviceName}</h1>
          <h1></h1>
          <h1></h1>
        </div>
        <div>
          <h1>Location</h1>
          <h1>{device.location.building}</h1>
          <h1>{device.location.city}</h1>
        </div>
        <div>
          <h1>Cell info</h1>
          <h1>{device.hw_data.sim.operator}</h1>
          <h1>{device.hw_data.sim.signalStrength}</h1>
        </div>
        <div>
          <h1>Usb Devices</h1>
          <h1></h1>
        </div>
        <div>
          <h1>Battery info</h1>
          <h1>{device.hw_data.battery.percentage}</h1>
          <h1>{device.hw_data.battery.temperature}</h1>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ShowDevice;
