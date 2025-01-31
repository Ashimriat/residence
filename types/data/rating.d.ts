declare type RatingData = {
  position: number;
  user: Participant
  rating: number;
  statistics: {
    wins: number;
    losses: number;
  };
}

declare type RatingTableColumn = {
  id: string;
  name: string;
  field: Exclude<keyof RatingData, 'userId'>
};