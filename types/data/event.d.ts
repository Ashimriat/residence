declare type EventData = {
  isAbonWorks: boolean;
  price: number;
  oldPrice?: number;
  currentPlayers: string[];
  gameData: GameData;
  locationData: LocationData;
};