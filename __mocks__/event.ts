import { deepmerge } from 'deepmerge-ts';
import { mockOtherUsers } from './otherUsers';

const EVENT_DATA: EventData = {
  isSubscriptionWorks: true,
  oldPrice: 400,
  price: 300,
  gameData: {
    id: crypto.randomUUID(),
    title: 'Городская мафия',
    description: 'Cоберитесь вместе для того, чтобы вычислить коварную мафию! Красные городские жители или же чёрная мафиозная команда - кто останется победителем, а кто покинет город?',
    master: {
      name: 'Александр',
      id: `${Math.round(Math.random())}`
    },
    maxPlayersAmount: 10,
    address: 'Улица Пушкина, дом Колотушкина',
    date: '10 марта',
    time: '18:00',
  },
  participants: mockOtherUsers(8),
  locationData: {
    address: 'Ул. Пушкина, д. Колотушкина 14 кв. 88',
    subway: {
      branchType: 'standard5',
      stationName: 'Октябрьская',
      id: crypto.randomUUID(),
    },
    mapLink: 'https://ololo.ru',
  },
};

const mockEventsData = (length: number): EventData[] => (
  Array.from(
    { length },
    () => deepmerge(
      EVENT_DATA,
      {
        isSubscriptionWorks: Boolean(Math.round(Math.random())),
        gameData: {
          master: {
            id: `${Math.round(Math.random())}`
          }
        }
      }
    )
  )
);

const mockEventsBigData = (sets: number, setLength: number): EventData[][] => (
  Array.from({ length: sets }, () => mockEventsData(setLength))
);


export {
  mockEventsData,
  mockEventsBigData,
};
