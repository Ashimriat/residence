import { mockText } from './text';


const ACHIEVEMNT: AchievementData = {
  title: 'Достижение',
  isObtained: false,
  description: mockText(),
}

const mockAchievementsList = (length: number, isObtained = true) => Array.from({ length }, () => ({
  ...ACHIEVEMNT,
  isObtained,
}));


export { mockAchievementsList };
