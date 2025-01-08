import { mockText, mockShortText } from './text'


const mockClans = (length: number, participantsAmount: number, isShortDescription = false): ClanData[] => Array.from({ length }, (_, i) => ({
  id: `${i}`,
  title: 'Клан',
  image: undefined,
  description: isShortDescription ? mockShortText() : mockText(),
  rating: i + 1,
  participants: Array.from({ length: participantsAmount }, (_, j) => ({
    name: 'Имя',
    avatar: undefined,
    id: `${j}`,
  })),
}));


export { mockClans };
