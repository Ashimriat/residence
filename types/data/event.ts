export type EventData = {
  isSubscriptionWorks: boolean;
  price: number;
  oldPrice?: number;
  participants: Participant[];
  gameData: GameData;
  locationData: LocationData;
};
