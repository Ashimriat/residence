import { mockText } from './text';


const ACHIEVEMENT: AchievementData = {
  title: 'Достижение',
  isObtained: false,
  description: mockText(),
}

const mockAchievementsList = (length: number, isObtained = true) => Array.from({ length }, () => ({
  ...ACHIEVEMENT,
  isObtained,
}));


export { mockAchievementsList };
