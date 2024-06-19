import { Line } from "react-chartjs-2";
import data_0 from "../../Api/data_0.json";
import data_1 from "../../Api/data_1.json";

function Graph() {
  return (
    <div>
      <Line
        data={{
          labels: data_0.map((data) => data.data),
          datasets: [
            {
              label: "Data-0",
              data: data_0.map((data) => data.data),
              backgroundColor: "#12F7F3",
            },
            {
              label: "Data-1",
              data: data_1.map((data) => data.data),
              backgroundColor: "#70A3E9",
            },
            {
              label: "Data-2",
              data: data_1.map((data) => data.data),
              backgroundColor: "#0047FC",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Chart Title",
              align: "start",
              font: {
                size: 20,
                color: "black",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
