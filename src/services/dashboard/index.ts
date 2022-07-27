import moment from "moment";
import { IDate } from "../../components/molecules/MDatePicker";
import { IOrder, IUserCategory } from "../../core/dashboard/entities";

export class DashboardService {
  public static getDataUsers(
    userCategory: IUserCategory
  ): { type: string; value: number }[] {
    return Object.entries(userCategory).map((e) => ({
      type: e[0].split("_").join(" "),
      value: +e[1],
    }));
  }

  public static getFilteredOrders(orders: IOrder[], date: IDate[]): IOrder[] {
    const filteredOrders = orders.filter((order) => {
      let orderDate = new Date(order.start_date);
      return (
        orderDate >= new Date(date[0].startDate) &&
        orderDate <= new Date(date[0].endDate)
      );
    });
    return filteredOrders;
  }

  public static getDataConversions(
    orders: IOrder[]
  ): { type: string; value: number | unknown }[] {
    const conversion: any = {};

    for (let i = 0; i < orders.length; i++) {
      let item = orders[i].conversion_item;

      if (conversion[item] !== undefined) {
        conversion[item] += Number(orders[i].conversion_revenue);
      } else {
        conversion[item] = Number(orders[i].conversion_revenue);
      }
    }
    return Object.entries(conversion).map((e) => ({
      type: e[0],
      value: e[1],
    }));
  }

  public static getDataRevenues(
    orders: IOrder[]
  ): { Date: string; scales: number }[] {
    return orders
      .filter((e) => e.status === "completed")
      .map((e) => ({
        Date: moment(e.due_date).format("DD/MM/YYYY"),
        scales: +e.conversion_revenue,
      }));
  }

  public static getTotalRevenue(
    revenues: { Date: string; scales: number }[]
  ): number {
    return revenues.reduce(
      (prev, current) => Number(prev) + Number(current.scales),
      0
    );
  }
}
