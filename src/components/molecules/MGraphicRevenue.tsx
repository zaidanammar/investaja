import React from "react";
import { Area } from "@ant-design/plots";
import { TiArrowUpThick } from "react-icons/ti";

import AContainer from "../atoms/AContainer";

const config = (data: any[]) => {
  return {
    color: "#789764",
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
    data: data,
    animation: true,
    height: 330,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  };
};

type Props = {
  data: any;
};

const MGraphicRevenue = ({ data }: Props) => {
  return (
    <AContainer border>
      <div className="flex justify-between items-center">
        <h3>Revenue</h3>
        <div className="border border-borderColor rounded-md p-2">
          <p className="text-xs">Feb - Mar 2021</p>
        </div>
      </div>
      <div className="mt-10">
        <Area {...config(data)} />
      </div>
      <aside>
        <h6 className="text-textSecondary">Total Revenue</h6>
        <h3 className="text-textPrimary">$76685.41</h3>
        <div className="mt-0.5 flex gap-1 items-center">
          <TiArrowUpThick className="fill-primary" size={14} />
          <p className="text-primary text-xs">7,00%</p>
        </div>
      </aside>
    </AContainer>
  );
};

export default MGraphicRevenue;
