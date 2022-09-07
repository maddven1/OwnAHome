import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import axios from "axios";
import {Box} from "@mui/material"

ChartJS.register(...registerables);

const state = {
  labels: ["december","January", "February", "March", "April"],
  datasets: [
    {
      label: "Capital Lock",
      fill: true,
      lineTension: 0.5,
      pointHitRadius: 20,
      pointRadius:5,
      pointHoverRadius: 10,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [0,4,3,8,20],
    },
  ],
};

export default class GraphBox extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const response = await axios.get("localhost:4000/graph");
    if (response.status === 200) {
    }
  }
  render() {
    return (
      <Box mt={4}>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </Box>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Line
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }
