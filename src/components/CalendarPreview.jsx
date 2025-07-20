'use client'; // Required for Next.js App Router

import Calendar from "react-calendar";
import { useRecurrenceStore } from "../hooks/useRecurrenceStore";
import { useMemo, useEffect, useState } from "react";
import { addDays, addWeeks, addMonths, addYears } from "date-fns";

export default function CalendarPreview() {
  const { recurrence } = useRecurrenceStore();

  const recurringDates = useMemo(() => {
    if (!recurrence.startDate) return [];

    let dates = [];
    let current = new Date(recurrence.startDate);
    const end = recurrence.endDate ? new Date(recurrence.endDate) : addYears(current, 1);

    while (current <= end) {
      dates.push(new Date(current));
      switch (recurrence.frequency) {
        case "daily":
          current = addDays(current, recurrence.interval);
          break;
        case "weekly":
          current = addWeeks(current, recurrence.interval);
          break;
        case "monthly":
          current = addMonths(current, recurrence.interval);
          break;
        case "yearly":
          current = addYears(current, recurrence.interval);
          break;
      }
    }

    return dates;
  }, [recurrence]);

  // ✅ Client-only rendering check to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="p-4">
      <Calendar
        value={recurringDates}
        locale="en-GB" // ✅ Consistent locale across server and client
        tileClassName={({ date }) =>
          recurringDates.find((d) => d.toDateString() === date.toDateString())
            ? "bg-blue-300"
            : ""
        }
        formatDay={(locale, date) => date.getDate()} // ✅ Force day format (optional but helps)
        selectRange={false}
        showNeighboringMonth={false}
      />
    </div>
  );
}
