import React, {useState, useEffect} from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = [
  "#875CF5", // Purple
  "#FA2C37", // Red
  "#FF6908", // Orange
  "#413916", // Dark yellow/brown
];
const RecentIncomeWithChart = ({data, totalIncome}) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item.source,
      amount: item.amount,
    }));
    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>
      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
