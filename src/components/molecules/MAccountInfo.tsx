import React from "react";
import { Avatar } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";

const MAccountInfo = () => {
  return (
    <section className="flex gap-4 items-center">
      <div>
        <Avatar
          sx={{
            bgcolor: "#F4F4F4",
          }}
        >
          <h5 className="text-black font-bold">RH</h5>
        </Avatar>
      </div>
      <div className="md:flex flex-col hidden w-40 overflow-hidden">
        <h3 className="font-bold text-textPrimary w-full truncate">
          Reinhart H.
        </h3>
        <h5 className="font-normal text-textSecondary text-xs">
          Kemang, Jakarta
        </h5>
      </div>
      <div className="md:flex hidden">
        <FiChevronDown size={20} />
      </div>
    </section>
  );
};

export default MAccountInfo;
