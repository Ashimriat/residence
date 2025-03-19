import type { Temporal } from '@js-temporal/polyfill';


export type NotificationType = 'rate' | 'paymentSuccess' | 'paymentFail' | 'social';

export type NotificationData = {
  id: string;
  type: NotificationType;
  title: string;
  date: Temporal.ZonedDateTime;
  description: string;
};
