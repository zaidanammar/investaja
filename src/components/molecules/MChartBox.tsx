import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Pie } from "@ant-design/plots";

import AContainer from "../../components/atoms/AContainer";

type Props = {
  title: string;
  data: any[];
  containerProps?: string;
  prefix?: string;
};

export const config = (prefix?: string) => {
  return {
    color: ["#725E9C", "#EBA45E", "#5C8F94", "#E4EAEB"],
    appendPadding: 20,
    angleField: "value",
    colorField: "type",
    radius: 1,
    label: {
      type: "inner",
      offset: "-30%",
      content: (content: any) =>
        prefix ? `${prefix}${content.value}` : content.value,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    legend: {
      layout: "horizontal" as "horizontal",
      position: "bottom" as "bottom",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
};

const MChartBox = ({ title, containerProps, data, prefix }: Props) => {
  return (
    <AContainer border className={containerProps}>
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        <div className="border border-borderColor rounded-md p-2 cursor-pointer hover:bg-slate-50 hover:bg-opacity-70">
          <BsThreeDots />
        </div>
      </div>
      <div>
        <Pie {...config(prefix)} data={data} />
      </div>
    </AContainer>
  );
};

export default MChartBox;
