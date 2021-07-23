import { PolarArea } from "react-chartjs-2";
import "./Chart.css";

export default function ChartSkills({ data, title }) {
  return (
    <div className="chart-container">
      <p className="chart-title">{title}</p>
      <PolarArea data={data} />
    </div>
  );
}
