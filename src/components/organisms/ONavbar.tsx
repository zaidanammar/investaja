import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

import MAccountInfo from "../molecules/MAccountInfo";
import MSearchBar from "../molecules/MSearchBar";
import { logo } from "../../assets";

const ONavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-20 w-full fixed inset-0 z-20 px-5 bg-white shadow">
      <section className="flex sm:gap-4 gap-3 items-center justify-between h-full w-full">
        <div className="flex lg:gap-6 gap-3 items-center">
          <div className="sm:flex hidden w-32">
            <img
              src={logo}
              onClick={() => navigate("/dashboard")}
              alt="logo"
              className="w-full"
            />
          </div>

          <MAccountInfo />
        </div>

        <div className="flex flex-1 justify-end items-center gap-1">
          <div className="xs:w-80 w-full">
            <MSearchBar placeholder="Search here..." />
          </div>

          <div className="flex justify-between items-center">
            <IconButton>
              <IoMdNotificationsOutline className="fill-textPrimary" />
            </IconButton>
            <IconButton>
              <FiSettings className="stroke-textPrimary" size={20} />
            </IconButton>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default ONavbar;
