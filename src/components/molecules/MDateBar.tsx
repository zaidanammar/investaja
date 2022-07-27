import React from "react";
import moment from "moment";

const MDateBar = () => {
  return (
    <aside className="bg-secondary h-14 px-5 flex justify-end items-center">
      <p className="text-xs text-textPrimary">
        {moment().format("DD MMMM YYYY")}
      </p>
    </aside>
  );
};

export default MDateBar;
