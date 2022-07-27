import React from "react";
import { Pagination as Paginate } from "@mui/material";

type Props = {
  data: any[];
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  setPage: (page: number) => void;
};

const MPagination = ({ data, rowsPerPage, setPage, setRowsPerPage }: Props) => {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <nav className="flex justify-between items-center overflow-scroll whitespace-nowrap">
      <Paginate
        count={Math.ceil(data.length / rowsPerPage)}
        onChange={handleChangePage}
      />

      <div className="flex items-center justify-end gap-3">
        <p className="text-textPrimary text-sm">Show</p>
        <div className="flex">
          <select
            onChange={handleChangeRowsPerPage}
            value={rowsPerPage}
            className="bg-gray-50 border rounded-full border-gray-300 text-textPrimary text-sm focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default MPagination;
