export type GameData = {
  id: string;
  title: string;
  description: string;
  master: {
    name: string;
    id: string;
  }
  maxPlayersAmount: number;
  date: string;
  time: string;
  address: string;
};
