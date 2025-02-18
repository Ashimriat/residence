const MAFIA_TEAM_OPTIONS_SPORT: SelectOption[] = [
  {
    label: 'Победа мафии',
    value: 'mafia',
  },
  {
    label: 'Победа мирных',
    value: 'peaceful',
  },
];

const MAFIA_TEAM_OPTIONS_TOWN: SelectOption[] = [
  ...MAFIA_TEAM_OPTIONS_SPORT,
  {
    label: 'Победа маньяка',
    value: 'maniac',
  },
];

const MAFIA_ROLES_SPORT = [
  {
    label: 'Мирный',
    value: 'peaceful',
  },
  {
    label: 'Мафия',
    value: 'mafia',
  },
  {
    label: 'Дон',
    value: 'don',
  },
  {
    label: 'Комиссар',
    value: 'commissioner',
  },
];

const MAFIA_ROLES_TOWN = [
  ...MAFIA_ROLES_SPORT,
  {
    label: 'Доктор',
    value: 'doctor',
  },
  {
    label: 'Любовница',
    value: 'mistress',
  },
  {
    label: 'Маньяк',
    value: 'maniac',
  },
];


export {
  MAFIA_TEAM_OPTIONS_SPORT,
  MAFIA_TEAM_OPTIONS_TOWN,
  MAFIA_ROLES_SPORT,
  MAFIA_ROLES_TOWN,
};
