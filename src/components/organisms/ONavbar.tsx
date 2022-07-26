import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

import MSearchbar from "../molecules/MSearchbar";
import MAccountInfo from "../molecules/MAccountInfo";
import { logo } from "../../assets";

const ONavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sm:h-[5rem] h-[4.5rem] w-full fixed inset-0 z-20 md:px-10 px-4 bg-white shadow-lg">
      <section className="flex sm:gap-4 gap-3 items-center justify-between h-full w-full">
        <div className="flex gap-6 items-center">
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
            <MSearchbar placeholder="Search here..." />
          </div>

          <div className="flex items-center">
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
