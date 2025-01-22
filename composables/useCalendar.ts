import type { CalendarDate } from '~/components/DatePickerCalendar.vue';


export default function useCalendar() {
  return ref<CalendarDate>(null);
}