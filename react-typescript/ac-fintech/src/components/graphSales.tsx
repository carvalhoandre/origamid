import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ISale } from "../context/types";

import transformData from "../helpers/graph";

const GraphSales = ({ data }: { data: Array<ISale> }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformData(data)}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphSales;
