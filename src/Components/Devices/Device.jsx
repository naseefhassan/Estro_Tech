import { useContext, useEffect } from "react"
import { Mycontext } from "../../Context/UserContext"
import DeviceData from "../../Api/deviceData"
import usb from '../../assets/Images/usb.png'
import signal from '../../assets/Images/signal.png'
import battery from '../../assets/Images/battery.png'
import pin from '../../assets/Images/pin.png'
import sim from '../../assets/Images/sim.png'

function Device() {
  const {setHead}=useContext(Mycontext)
  const deviceData = DeviceData
  console.log(deviceData);
  useEffect(()=>{
    setHead('Device')
  },[])
  return (
    <>
    <div className="flex gap-2 text-sm font-semibold text-gray-700 flex-wrap">
    {deviceData.map((item)=>(
       <div key={item.deviceName} className="border-2 w-[350px] p-2 cursor-pointer ">
       <div className="flex justify-between items-center">
         <h1>{item.deviceName}</h1>
         <div className="flex gap-1">
          <img className="w-3 h-3 rotate-90" src={usb} alt="usb img" />
          <img className="w-3 h-3" src={signal} alt="signal img" />
          <img className="w-3 h-3" src={battery} alt="battery img" />
         </div>
       </div>
       <h1>🛑 Offline</h1>
       <h1 className='flex items-center gap-1'> <img className="w-3 h-3" src={pin} alt="" />Location</h1>
       <h1 className='flex items-center gap-1'> <img className="w-3 h-3" src={sim} alt="" />Cell info</h1>
 
     </div>
    ))}
   </div>
    </>
  )
}

export default Device