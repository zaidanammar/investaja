import { IOrder } from "./entities";

// "code": 2200, "data": { "user_category": { "risk_averse": "859", "conservative": "482", "moderate": "354", "risk_taker": "20" },
export default interface IDashboardUsecase {
  getDashboards(): Promise<{
    code: string;
    orders: IOrder[];
    data: any;
  }>;
}
