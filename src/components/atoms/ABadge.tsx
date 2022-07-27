import React from "react";

type Props = {
  status: string;
};

const renderStatusColor = (status: string) => {
  const statusColor: any = {
    completed: "bg-completed",
    pending: "bg-pending",
    canceled: "bg-canceled",
  };
  return statusColor[status];
};

const ABadge = ({ status }: Props) => {
  return (
    <div
      className={
        "px-2 py-1 flex items-center justify-center rounded-md shadow-sm text-white text-xs " +
        renderStatusColor(status)
      }
    >
      {status}
    </div>
  );
};

export default ABadge;
