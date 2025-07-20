import RecurrenceSelector from "./RecurrenceSelector";
import DateRangeSelector from "./DateRangeSelector";

import CalendarPreview from "./CalendarPreview";

export default function RecurringDatePicker() {
  return (
    <div className="max-w-lg mx-auto p-4 shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Recurring Date Picker</h2>
      <RecurrenceSelector />
      <DateRangeSelector />
      {/* <CustomPatternSelector /> */}
      <CalendarPreview />
    </div>
  );
}
