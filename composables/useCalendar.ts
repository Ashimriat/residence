export default function useCalendar() {
  return {
    selectedDate: ref<CalendarDate>(null),
    selectedTime: ref<Time>(''),
  };
};
