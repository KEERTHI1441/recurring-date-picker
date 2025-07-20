import { useRecurrenceStore } from "../hooks/useRecurrenceStore";

export default function DateRangeSelector() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div className="p-4 flex gap-4">
      <div>
        <label className="block">Start Date</label>
        <input
          type="date"
          value={recurrence.startDate || ""}
          onChange={(e) =>
            setRecurrence({ ...recurrence, startDate: e.target.value })
          }
          className="border rounded p-2"
        />
      </div>

      <div>
        <label className="block">End Date (Optional)</label>
        <input
          type="date"
          value={recurrence.endDate || ""}
          onChange={(e) =>
            setRecurrence({ ...recurrence, endDate: e.target.value })
          }
          className="border rounded p-2"
        />
      </div>
    </div>
  );
}
