import { mockOtherUsers } from './otherUsers';

const EVENT_DATA: EventData = {
  isAbonWorks: true,
  oldPrice: 400,
  price: 300,
  gameData: {
    title: 'Городская мафия',
    description: 'Cоберитесь вместе для того, чтобы вычислить коварную мафию! Красные городские жители или же чёрная мафиозная команда - кто останется победителем, а кто покинет город?',
    master: 'Александр',
    maxPlayersAmount: 10,
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

const mockEventsData = (length: number): EventData[] => Array.from({ length }, () => EVENT_DATA);

const mockEventsBigData = (sets: number, setLength: number): EventData[][] => Array.from({ length: sets }, () => mockEventsData(setLength));


export {
  mockEventsData,
  mockEventsBigData,
};
