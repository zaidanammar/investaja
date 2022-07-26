import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import ALoading from "../components/atoms/ALoading";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center pt-10">
          <ALoading />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
