import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addYears } from "date-fns";

import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

import AButton from "../atoms/AButton";

export interface IDate {
  startDate: Date;
  endDate: Date;
  key: string;
}

type Props = {
  dateProps: IDate[];
  handleChangeDate: (date: IDate[]) => void;
};

const MDatePicker = ({ dateProps, handleChangeDate }: Props) => {
  const [date, setDate] = useState(dateProps);

  const handleCancelFilter = () => {
    setDate(dateProps);
  };

  return (
    <aside
      data-testid="date-picker"
      className="sm:w-fit w-full h-full border p-5 rounded-md"
    >
      <DateRange
        className="w-full"
        data-testid="content-input"
        minDate={addYears(new Date(), -5)}
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

      <div className="mx-20 flex gap-2 justify-center items-center">
        <AButton variant="outlined" handleClick={handleCancelFilter}>
          <p className="text-xs font-bold">Cancel</p>
        </AButton>
        <AButton handleClick={() => handleChangeDate(date)}>
          <p className="text-xs font-bold text-textPrimary">Filter</p>
        </AButton>
      </div>
    </aside>
  );
};

export default MDatePicker;
