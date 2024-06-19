import { useContext, useEffect } from "react";
import { Mycontext } from "../../Context/UserContext";
import DeviceAvailability from "./DeviceAvaliability";
// import Datas from "./Datas";
import Graph from "./Graph";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashBoard() {
  const { setHead } = useContext(Mycontext);
  
  useEffect(() => {
    setHead("Dashboard");
  }, []);

  return (
    <div>
      <div className="w-full h-[200px] border-2 my-2">
        <Graph />
      </div>
      <div className="flex justify-between items-center">
        <div className="border-2 w-1/3 h-[260px] rounded-lg">
          {/* <Datas /> */}
        </div>
        <div className="border-2 w-1/3 rounded-lg ">
          {/* <DeviceAvailability /> */}
        </div>
        <div className="border-2 w-1/3  h-[260px] rounded-lg">welkfm</div>
      </div>
    </div>
  );
}

export default DashBoard;
