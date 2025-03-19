export type RatingData = {
  position: number;
  user: Participant;
  rating: number;
  statistics: {
    wins: number;
    losses: number;
  };
};

export type RatingTableColumn = {
  id: string;
  name: string;
  field: Exclude<keyof RatingData, 'userId'>;
};
