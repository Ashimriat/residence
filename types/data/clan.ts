export type Participant = {
  name: string;
  avatar?: string;
  id: string;
};

export type ClanData = {
  id: string;
  title: string;
  ownerId: string;
  description: string;
  image?: string;
  rating: number;
  participants: Participant[];
};

export type ClanCreationData = Pick<ClanData, 'title' | 'description' | 'image'>;
