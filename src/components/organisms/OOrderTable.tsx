import React, { useMemo, useState } from "react";
import moment from "moment";

import { IOrder } from "../../core/dashboard/entities";
import MPagination from "../molecules/MPagination";
import ABadge from "../atoms/ABadge";
import { IDate } from "../molecules/MDatePicker";
import { DashboardService } from "../../services/dashboard";

const tableTitle = [
  "Order Number",
  "Status",
  "Operator",
  "Location",
  "Start Date",
  "Due Date",
];

type Props = {
  data: IOrder[];
  date: IDate[];
};

const OOrderTable = ({ data, date }: Props) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredorders = useMemo(
    () => DashboardService.getFilteredOrders(data, date),
    [data, date]
  );

  return (
    <div className="relative overflow-x-auto mt-2 w-full bg">
      <table className="w-full text-sm text-left">
        <thead className="text-sm text-textPrimary border-b-2 border-b-['##FFFFFF'] bg-secondary">
          <tr>
            {tableTitle.map((title, idx) => (
              <th key={idx} scope="col" className="py-3 px-6">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-textPrimary">
          {filteredorders
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((el, idx) => (
              <tr key={idx} className="border-b text-xs hover:bg-activeColor">
                <td className="px-6 py-4 w-28">{el.order_id}</td>
                <td className="px-6 py-4">
                  <ABadge status={el.status} />
                </td>
                <td className="px-6 py-4">{el.full_name || "-"}</td>
                <td className="px-6 py-4">{el.location || "-"}</td>
                <td className="px-6 py-4">
                  {moment(el.start_date).format("DD/MM/YYYY HH:ss") || "-"}
                </td>
                <td className="px-6 py-4">
                  {moment(el.due_date).format("DD/MM/YYYY HH:ss") || "-"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <aside className="sm:w-auto w-[720px] mt-5">
        <MPagination
          data={filteredorders}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      </aside>
    </div>
  );
};

export default OOrderTable;
