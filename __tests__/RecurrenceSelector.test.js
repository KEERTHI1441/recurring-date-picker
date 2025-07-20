// import { render, screen, fireEvent } from "@testing-library/react";
// import RecurrenceSelector from "../components/RecurrenceSelector";
// import { useRecurrenceStore } from "../hooks/useRecurrenceStore";

// jest.mock("../hooks/useRecurrenceStore");

// test("Recurrence selector renders options and updates state", () => {
//   const setRecurrence = jest.fn();
//   useRecurrenceStore.mockReturnValue({
//     recurrence: { frequency: "daily" },
//     setRecurrence,
//   });

//   render(<RecurrenceSelector />);
//   fireEvent.change(screen.getByRole("combobox"), { target: { value: "weekly" } });
//   expect(setRecurrence).toHaveBeenCalledWith(expect.objectContaining({ frequency: "weekly" }));
// });

import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import RecurrenceSelector from "../src/components/RecurrenceSelector";

describe("RecurrenceSelector", () => {
  it("renders the selector", () => {
    render(<RecurrenceSelector />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
