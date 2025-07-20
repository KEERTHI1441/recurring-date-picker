import { useRecurrenceStore } from "../hooks/useRecurrenceStore";

export default function RecurrenceSelector() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div className="p-4">
      <label className="block font-semibold mb-2">Recurrence Frequency</label>
      <select
        value={recurrence.frequency}
        onChange={(e) =>
          setRecurrence({ ...recurrence, frequency: e.target.value })
        }
        className="border rounded p-2 w-full"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}
