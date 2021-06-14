import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import NoDataAvailableMsg from "../NoData/NoData";

export const Charts = () => {
  const data = useSelector((state) => state.overview.pieChartData);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#04FDDB",
    "#E011D0",
    "#DF1445",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = (props) => {
    const { cx, cy, name, players, midAngle, innerRadius, outerRadius } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={x - 27}
          y={y}
          fill="white"
          fontSize="12px"
          textAnchor={"start"}
          dominantBaseline="central"
        >
          {name}
        </text>
        <text
          x={x}
          y={y + 20}
          fill="white"
          fontSize="12px"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {players}
        </text>
      </>
    );
  };

  return data.length !== 0 ? (
    <ResponsiveContainer height={330} width={"100%"}>
      <PieChart width={200} height={100}>
        <Pie
          isAnimationActive={true}
          data={data}
          cx={"50%"}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="players"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ borderRadius: "15px" }} />
      </PieChart>
    </ResponsiveContainer>
  ) : (
    <NoDataAvailableMsg />
  );
};
