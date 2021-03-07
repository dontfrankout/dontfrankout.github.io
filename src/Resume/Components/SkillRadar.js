import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  console.log(props.data);

  const values = props.data.map((item) => {
    return item.progress;
  });
  const colors = props.data.map((item) => {
    return item.color;
  });
  const names = props.data.map((item) => {
    return item.name;
  });

  const data = {
    labels: [...names],
    datasets: [
      {
        data: [...values],
        backgroundColor: [...colors],
        borderColor: [...colors],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
