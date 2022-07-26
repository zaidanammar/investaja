import React, { ChangeEventHandler } from "react";
import { IconButton, InputBase } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

type Props = {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const MSearchBar = ({ placeholder, onChange }: Props) => {
  return (
    <div className="h-full w-full">
      <div className="relative flex bg-white rounded shadow-sm border">
        <InputBase
          className="input"
          onChange={onChange}
          sx={{ pl: 1.5, flex: 1, fontSize: "0.8rem" }}
          placeholder={placeholder}
          inputProps={{ "aria-label": `${placeholder}` }}
        />
        <IconButton>
          <IoIosSearch />
        </IconButton>
      </div>
    </div>
  );
};

export default MSearchBar;
