import { mockText, mockShortText } from './text'
import { mockOtherUsers } from './otherUsers';

const mockClans = (
  length: number,
  participantsAmount: number,
  isShortDescription = false
): ClanData[] => Array.from({ length }, (_, i) => ({
  id: `${i}`,
  title: 'Клан',
  ownerId: i === 0 ? '0' : 'clanOwnerId',
  image: undefined,
  description: isShortDescription ? mockShortText() : mockText(),
  rating: i + 1,
  participants: mockOtherUsers(participantsAmount).map((val, j) => ({
    ...val,
    id: i === 1 && j === 0 ? 'clanOwnerId' : `${j}`,
  }))
}));


export { mockClans };
