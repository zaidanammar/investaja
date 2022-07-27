import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears,
} from "date-fns";

// import AButton from "./AButton";
// import { checkLabelColor, defaultStaticRanges } from "../../utils/date";
// import { IDate, IProduct } from "../../core/product/entities";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import AButton from "../atoms/AButton";
// import { isMobile } from "react-device-detect";

type Props = {
  // dateProps: IDate[];
  // handleSetData: (product: IProduct[], date: IDate[]) => void;
  // data: IProduct[];
  // handleChangeDate: (date: IDate[]) => void;
  // handleOpenDatePicker: (open: boolean) => void;
};

export const defineds = {
  startOfDay: startOfDay(new Date()),
  endOfDay: endOfDay(new Date()),
  last7day: addDays(new Date(), -7),
  last30day: addDays(new Date(), -30),
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOflastYear: startOfYear(addYears(new Date(), -1)),
  endOflastYear: endOfYear(addYears(new Date(), -1)),
};

const MDatePicker = ({}: // dateProps,
// handleChangeDate,
// data,
// handleSetData,
// handleOpenDatePicker,
Props) => {
  const [date, setDate] = useState([
    {
      startDate: defineds.last7day,
      endDate: defineds.startOfYesterday,
      key: "selection",
    },
  ]);

  // useEffect(() => {
  //   checkLabelColor(date);
  // }, [date]);

  const handleApplyFilter = () => {
    // handleChangeDate(date);
    // handleSetData(data, date);
    // handleOpenDatePicker(false);
  };

  return (
    <aside className="sm:w-fit w-full h-full border p-5 rounded-md">
      <DateRange
        className="w-full"
        minDate={addMonths(new Date(), -6)}
        maxDate={new Date()}
        onChange={(item: any) => setDate([item.selection])}
        showMonthAndYearPickers={true}
        color="#82C341"
        rangeColors={["#8772B0", "#E0DBEB"]}
        retainEndDateOnFirstSelection={false}
        months={1}
        ranges={date}
        direction="horizontal"
        showDateDisplay={true}
      />

      <div className="mx-20  flex gap-2 justify-center items-center">
        <AButton variant="outlined" handleClick={handleApplyFilter}>
          <p className="text-xs font-bold">Cancel</p>
        </AButton>
        <AButton handleClick={handleApplyFilter}>
          <p className="text-xs font-bold text-textPrimary">Filter</p>
        </AButton>
      </div>
    </aside>
  );
};

export default MDatePicker;
