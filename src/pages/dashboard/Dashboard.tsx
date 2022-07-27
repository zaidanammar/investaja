import React from "react";

import AContainer from "../../components/atoms/AContainer";
import MDatePicker from "../../components/molecules/MDatePicker";
import MChartBox from "../../components/molecules/MChartBox";
import MGraphicRevenue from "../../components/molecules/MGraphicRevenue";

const data = [
  { type: "#cat1", value: 20 },
  { type: "#cat2", value: 40 },
  { type: "#cat3", value: 30 },
  { type: "#cat4", value: 10 },
];

const Dashboard = () => {
  return (
    <AContainer>
      <section className="md:flex gap-5">
        <div className="md:w-1/2 w-full sm:flex gap-5">
          <MChartBox title="Conversion" data={data} />
          <MChartBox title="User" data={data} containerProps="sm:mt-0 mt-5" />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-5">
          <div>
            <MGraphicRevenue />
          </div>
        </div>
      </section>

      <section className="md:flex gap-5 mt-5">
        {/* <AContainer border > */}
        <MDatePicker />
        {/* </AContainer> */}
      </section>
    </AContainer>
  );
};

export default Dashboard;
