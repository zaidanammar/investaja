import { IOrder, IUserCategory } from "./entities";

export default interface IDashboardRepository {
  getDashboards(): Promise<{
    code: string;
    data: {
      orders: IOrder[];
      user_category: IUserCategory;
    };
  }>;
}
