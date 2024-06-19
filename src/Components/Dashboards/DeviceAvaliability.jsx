import { Doughnut } from "react-chartjs-2"
import updatedTime from "../../Api/uptimeData.json"

function DeviceAvailability() {
  return (
    <div className="w-64  h-64 mx-auto">  <Doughnut 
    data={{
      labels: updatedTime.map((data)=>data.event),
      datasets:[{
        label:'Online',
        data:updatedTime.map((data)=>data.duration),
        backgroundColor:[
          'rgba(0, 255, 0, 0.8)',
         'rgba(255, 0, 0, 0.8)',
        ],
        
        
      }]
    }}/></div>
  )
}

export default DeviceAvailability