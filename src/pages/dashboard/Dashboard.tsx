import React, { useMemo, useState } from "react";
import { addYears } from "date-fns";

import AContainer from "../../components/atoms/AContainer";
import ALoading from "../../components/atoms/ALoading";
import MDatePicker from "../../components/molecules/MDatePicker";
import MChartBox from "../../components/molecules/MChartBox";
import MGraphicRevenue from "../../components/molecules/MGraphicRevenue";
import OOrderTable from "../../components/organisms/OOrderTable";
import { useFetchDashboards } from "../../apis/dashboard";
import { defineds } from "../../utils/date";
import { DashboardService } from "../../services/dashboard";

const Dashboard = () => {
  const [date, setDate] = useState([
    {
      startDate: addYears(new Date("01/01/2022"), -2),
      endDate: defineds.endOfMonth,
      key: "selection",
    },
  ]);

  const { data: dataDashboard, isLoading } = useFetchDashboards();

  const dataUsers = useMemo(() => {
    const user_category = dataDashboard?.data?.user_category;
    return user_category && DashboardService.getDataUsers(user_category);
  }, [dataDashboard]);

  const dataConversions = useMemo(() => {
    const orders = dataDashboard?.data?.orders;
    return orders && DashboardService.getDataConversions(orders);
  }, [dataDashboard]);

  const dataRevenues = useMemo(() => {
    const orders = dataDashboard?.data?.orders;
    return orders && DashboardService.getDataRevenues(orders);
  }, [dataDashboard]);

  return (
    <AContainer>
      {isLoading ? (
        <div className="flex items-center justify-center my-20">
          <ALoading />
        </div>
      ) : (
        <div>
          <section className="md:flex gap-5">
            <div className="md:w-1/2 w-full sm:flex gap-5">
              {dataConversions && (
                <MChartBox
                  title="Conversion"
                  data={dataConversions}
                  prefix="$"
                />
              )}
              {dataUsers && (
                <MChartBox
                  title="User"
                  data={dataUsers}
                  containerProps="sm:mt-0 mt-5"
                />
              )}
            </div>
            <div className="md:w-1/2 md:mt-0 mt-5">
              {dataRevenues && <MGraphicRevenue data={dataRevenues} />}
            </div>
          </section>

          <section className="md:flex gap-5 mt-5">
            <MDatePicker
              dateProps={date}
              handleChangeDate={(e) => setDate(e)}
            />
            <div className="mt-3 flex-1">
              {dataDashboard?.data?.orders && (
                <div>
                  <h2 className="text-textPrimary">Orders</h2>
                  <OOrderTable date={date} data={dataDashboard.data.orders} />
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </AContainer>
  );
};

export default Dashboard;
