import IDashboardRepository from "../repository";
import Instance from "../../../config";
import { IOrder, IUserCategory } from "../entities";

export default class DashboardRepository implements IDashboardRepository {
  private DASHBOARD_ROUTE = "/takehometest/web/dashboard";

  async getDashboards(): Promise<{
    code: string;
    data: {
      orders: IOrder[];
      user_category: IUserCategory;
    };
  }> {
    try {
      const response = await Instance().get(this.DASHBOARD_ROUTE);
      const { data } = response;
      return data;
    } catch (error) {
      throw error;
    }
  }
}
