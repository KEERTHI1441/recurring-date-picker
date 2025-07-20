import { create } from 'zustand';

export const useRecurrenceStore = create(set => ({
  recurrence: {
    frequency: 'daily',
    interval: 1,
    daysOfWeek: [],
    pattern: '',
    startDate: null,
    endDate: null,
  },
  setRecurrence: (newRecurrence) => set({ recurrence: { ...newRecurrence } }),
}));
