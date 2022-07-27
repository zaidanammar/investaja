import React, { useEffect, useState } from "react";
import moment from "moment";
import { addYears } from "date-fns";

import AContainer from "../../components/atoms/AContainer";
import ALoading from "../../components/atoms/ALoading";
import MDatePicker from "../../components/molecules/MDatePicker";
import MChartBox from "../../components/molecules/MChartBox";
import MGraphicRevenue from "../../components/molecules/MGraphicRevenue";
import OOrderTable from "../../components/organisms/OOrderTable";
import { useFetchDashboards } from "../../apis/dashboard";
import { defineds } from "../../utils/date";

const Dashboard = () => {
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataConversion, setDataConversion] = useState<any[]>([]);
  const [dataRevenue, setDataRevenue] = useState<any[]>([]);
  const [date, setDate] = useState([
    {
      startDate: addYears(new Date("01/01/2022"), -2),
      endDate: defineds.endOfMonth,
      key: "selection",
    },
  ]);

  const { data: dataDashboard, isLoading } = useFetchDashboards();

  useEffect(() => {
    if (dataDashboard) {
      const conversion: any = {};
      const orders = dataDashboard?.data?.orders;
      setDataUser(
        Object.entries(dataDashboard?.data?.user_category).map((e) => ({
          type: e[0].split("_").join(" "),
          value: +e[1],
        }))
      );
      for (let i = 0; i < orders.length; i++) {
        if (conversion[orders[i].conversion_item] !== undefined) {
          conversion[orders[i].conversion_item] = +orders[i].conversion_revenue;
        } else {
          conversion[orders[i].conversion_item] = +orders[i].conversion_revenue;
        }
      }
      setDataConversion(
        Object.entries(conversion).map((e) => ({
          type: e[0],
          value: e[1],
        }))
      );
      setDataRevenue(
        orders
          .filter((e) => e.status === "completed")
          .map((e) => ({
            Date: moment(e.due_date).format("DD/MM/YYYY"),
            scales: +e.conversion_revenue,
          }))
      );
    }
  }, [dataDashboard]);

  return (
    <AContainer>
      <section className="md:flex gap-5">
        <div className="md:w-1/2 w-full sm:flex gap-5">
          {isLoading ? (
            <div className="w-full flex items-center justify-center my-20">
              <ALoading />
            </div>
          ) : (
            <>
              <MChartBox title="Conversion" data={dataConversion} />
              <MChartBox
                title="User"
                data={dataUser}
                containerProps="sm:mt-0 mt-5"
              />
            </>
          )}
        </div>
        <div className="md:w-1/2 md:mt-0 mt-5">
          {isLoading ? (
            <div className="w-full flex items-center justify-center my-20">
              <ALoading />
            </div>
          ) : (
            <div>
              <MGraphicRevenue data={dataRevenue} />
            </div>
          )}
        </div>
      </section>

      <section className="md:flex gap-5 mt-5">
        <MDatePicker dateProps={date} handleChangeDate={(e) => setDate(e)} />
        <div className="mt-3 flex-1">
          {isLoading && (
            <div className="flex items-center justify-center my-20">
              <ALoading />
            </div>
          )}
          {dataDashboard?.data?.orders && (
            <div>
              <h2 className="text-textPrimary">Orders</h2>
              <OOrderTable date={date} data={dataDashboard.data.orders} />
            </div>
          )}
        </div>
      </section>
    </AContainer>
  );
};

export default Dashboard;
