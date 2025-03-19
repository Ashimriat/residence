export type EventData = {
  isAbonWorks: boolean;
  price: number;
  oldPrice?: number;
  participants: Participant[];
  gameData: GameData;
  locationData: LocationData;
};
