import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { IconButton, InputBase } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

type Props = {
  onParentFocus?: FocusEventHandler<HTMLDivElement>;
  onParentBlur?: FocusEventHandler<HTMLDivElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
};

const MSearchbar = ({
  onParentFocus,
  onParentBlur,
  placeholder,
  onChange,
}: Props) => {
  return (
    <div
      onFocus={onParentFocus}
      onBlur={onParentBlur}
      className="h-full w-full"
    >
      <div className="relative flex bg-white rounded shadow-sm border">
        <InputBase
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

export default MSearchbar;
