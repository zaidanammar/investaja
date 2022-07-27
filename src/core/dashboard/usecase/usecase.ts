import { IOrder } from "../entities";
import IDashboardRepository from "../repository";
import IDashboardUsecase from "../usecase";

export default class DashboardUsecase implements IDashboardUsecase {
  private dashboardRepo: IDashboardRepository;

  constructor(dashboardRepo: IDashboardRepository) {
    this.dashboardRepo = dashboardRepo;
  }

  async getDashboards(): Promise<{
    code: string;
    orders: IOrder[];
    data: any;
  }> {
    return await this.dashboardRepo.getDashboards();
  }
}
