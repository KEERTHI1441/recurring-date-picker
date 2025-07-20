import { render, screen, fireEvent } from "@testing-library/react";
import RecurringDatePicker from "../src/components/RecurringDatePicker";
import { useRecurrenceStore } from "../src/hooks/useRecurrenceStore";

jest.mock("../src/hooks/useRecurrenceStore");

describe("RecurringDatePicker Integration", () => {
  test("renders frequency selector and updates calendar preview", () => {
    const setRecurrence = jest.fn();

    useRecurrenceStore.mockReturnValue({
      recurrence: {
        frequency: "daily",
        interval: 1,
        startDate: "2025-07-01",
        endDate: "2025-07-10",
      },
      setRecurrence,
    });

    render(<RecurringDatePicker />);

    // Check if selector renders with default value
    const select = screen.getByRole("combobox");
    expect(select.value).toBe("daily");

    // Simulate user changing frequency to weekly
    fireEvent.change(select, { target: { value: "weekly" } });
    expect(setRecurrence).toHaveBeenCalledWith(
      expect.objectContaining({ frequency: "weekly" })
    );

    // Check if calendar preview is in the document
    expect(screen.getByText("July 2025")).toBeInTheDocument();
  });
});
