import { mockText } from './text';

const SUBSCRIPTION: Subscription = {
  name: 'Абонемент на игру',
  description: mockText(),
  price: 300,
};


const mockSubscriptions = (length: number) => Array.from({ length }, () => SUBSCRIPTION);


export { mockSubscriptions };
