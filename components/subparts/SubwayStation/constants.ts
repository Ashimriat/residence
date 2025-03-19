const SUBWAY_BRANCHES_COLORS_DICT: Record<SubwayStationProps['branchType'], string> = {
  standard1: '#E42313',
  standard2: '#4BAF4F',
  standard3: '#0071B9',
  standard4: '#1DBBEE',
  standard4a: '#1DBBEE',
  standard5: '#925233',
  standard6: '#EF7E24',
  standard7: '#943F90',
  standard8: '#FFCD1E',
  standard8a: '#FFCD1E',
  standard9: '#ADACAC',
  standard10: '#BED12E',
  standard11: '#78C7C9',
  standard12: '#ACBFE3',
  mcc: '#E42D24', // сложный логотип
  mcd1: '#F6A500',
  mcd2: '#E94282',
  mcd3: '#E95B0C',
  mcd4: '#41B384',
  mcd4a: '#41B384',
  mcd4b: '#41B384',
} as const;

const SUBWAY_STATIONS: SubwayStationProps[] = [
  {
    branchType: 'standard1',
    stationName: 'Красные ворота',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard2',
    stationName: 'Речной вокзал',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard3',
    stationName: 'Митино',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard4',
    stationName: 'Филёвский парк',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard4a',
    stationName: 'Деловой центр',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard5',
    stationName: 'Павелецкая',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard6',
    stationName: 'Медведково',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard7',
    stationName: 'Жулебино',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard8',
    stationName: 'Перово',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard8a',
    stationName: 'Солнцево',
    id: crypto.randomUUID(),
  },
  {
    branchType: 'standard9',
    stationName: 'Отрадное ',
    id: crypto.randomUUID(),
  },
];


export { SUBWAY_BRANCHES_COLORS_DICT, SUBWAY_STATIONS };
