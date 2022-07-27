import { useQuery } from "@tanstack/react-query";
import DashboardRepository from "../../core/dashboard/repository/repository";
import DashboardUsecase from "../../core/dashboard/usecase/usecase";

const useFetchDashboards = () => {
  const dashboardRepo = new DashboardRepository();
  const dashboardUsecase = new DashboardUsecase(dashboardRepo);
  return useQuery(["dashboards"], () => dashboardUsecase.getDashboards(), {
    refetchOnWindowFocus: false,
    refetchInterval: 30000,
  });
};

export { useFetchDashboards };
