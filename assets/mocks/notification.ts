import { type NotificationType, type NotificationData } from '~/types/data/notification';
import { Temporal } from '@js-temporal/polyfill';
import { mockShortText } from './text';


const generateNotificationType = (index: number): NotificationType => {
  switch (index % 4) {
    case 0: return 'rate';
    case 1: return 'paymentSuccess';
    case 2: return 'paymentFail';
    case 3:
    default:
      return 'social';
  }
};

const generateDate = (index: number): Temporal.ZonedDateTime => {
  const res = Temporal.Now.instant().toZonedDateTimeISO('Europe/Moscow');
  switch (index % 4) {
    case 0: return res.subtract({ minutes: 60 });
    case 1: return res.subtract({ hours: 24 });
    case 2: return res.subtract({ hours: 48 });
    case 3:
    default:
      return res.subtract({ hours: 72 });
  }
};

const mockNotifications = (length: number): NotificationData[] => Array.from({ length }, (_, i) => ({
  id: `${i}`,
  type: generateNotificationType(i),
  title: 'Какой-то заголовок',
  description: mockShortText(),
  date: generateDate(i),
}));


export { mockNotifications };
