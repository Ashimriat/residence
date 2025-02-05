import { type Temporal } from '@js-temporal/polyfill';


declare type NotificationType = 'rate' | 'paymentSuccess' | 'paymentFail' | 'social'

declare type NotificationData = {
  id: string;
  type: NotificationType;
  title: string;
  date: Temporal.ZonedDateTime;
  description: string;
};
