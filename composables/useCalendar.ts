import { type CalendarDate, type Time } from '~/components/DateTimeCalendar.vue';


export default function useCalendar() {
  return {
    selectedDate: ref<CalendarDate>(null),
    selectedTime: ref<Time>(''),
  }
}