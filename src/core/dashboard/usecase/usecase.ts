import { IOrder, IUserCategory } from "../entities";
import IDashboardRepository from "../repository";
import IDashboardUsecase from "../usecase";

export default class DashboardUsecase implements IDashboardUsecase {
  private dashboardRepo: IDashboardRepository;

  constructor(dashboardRepo: IDashboardRepository) {
    this.dashboardRepo = dashboardRepo;
  }

  async getDashboards(): Promise<{
    code: string;
    data: {
      orders: IOrder[];
      user_category: IUserCategory;
    };
  }> {
    return await this.dashboardRepo.getDashboards();
  }
}
