import IDashboardRepository from "../repository";
import Instance from "../../../config";
import { IOrder } from "../entities";

export default class DashboardRepository implements IDashboardRepository {
  private DASHBOARD_ROUTE = "/takehometest/web/dashboard";

  async getDashboards(): Promise<{
    code: string;
    orders: IOrder[];
    data: any;
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
