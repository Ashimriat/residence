/** @deprecated отказался от композабла, будет инициация в каждом конкретном месте */
export default function useCalendar(dateInitialValue: CalendarDate = null, timeInitialValue: Time = null) {
  return {
    selectedDate: ref<CalendarDate>(dateInitialValue),
    selectedTime: ref<Time>(timeInitialValue),
  };
};
