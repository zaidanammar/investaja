import { IOrder, IUserCategory } from "./entities";
export default interface IDashboardUsecase {
  getDashboards(): Promise<{
    code: string;
    data: {
      orders: IOrder[];
      user_category: IUserCategory;
    };
  }>;
}
