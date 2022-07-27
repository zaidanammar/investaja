export interface IOrder {
  order_id: string;
  start_date: string;
  due_date: string;
  full_name: string;
  location: string;
  status: string;
  conversion_item: string;
  conversion_revenue: string;
}

export interface IUserCategory {
  risk_averse: string;
  conservative: string;
  moderate: string;
  risk_taker: string;
}
