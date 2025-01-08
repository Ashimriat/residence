import type { TreeNode } from 'primevue/treenode';


const mockRatings = (length: number): RatingData[] => Array.from({ length }, (_, i) => ({
  position: i,
  userId: `${i}`,
  rating: 12000,
  statistics: {
    wins: 10,
    loses: 1,
  },
}));

const mockRatingsTableData = (): TreeNode[] => [
  {
    key: 'position',
    label: `${1}`,
  },
  {
    key: 'name',
    label: 'Имя',
    data: {
      avatar: undefined
    },
  },
  {
    key: 'rating',
    label: '12000',
  },
  {
    key: 'statistics',
    label: '10/1',
  },
]


export { mockRatings, mockRatingsTableData };
