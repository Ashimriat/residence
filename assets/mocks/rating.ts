import type { TreeNode } from 'primevue/treenode';
import { mockOtherUsers } from './otherUsers';

const mockRatingsTableData = (length: number): RatingData[] => Array.from({ length }, (_, i) => ({
  position: i,
  user: mockOtherUsers(1)[0],
  rating: 12000,
  statistics: {
    wins: 10,
    losses: 1,
  },
}));

const mockRatingsTableColumns = (): RatingTableColumn[] => [
  {
    id: crypto.randomUUID(),
    name: '#',
    field: 'position'
  },
  {
    id: crypto.randomUUID(),
    name: 'Имя',
    field: 'user'
  },
  {
    id: crypto.randomUUID(),
    name: 'Рейтинг',
    field: 'rating'
  },
  {
    id: crypto.randomUUID(),
    name: 'Статистика (поб/пор)',
    field: 'statistics'
  },
];

export { mockRatingsTableData, mockRatingsTableColumns };
