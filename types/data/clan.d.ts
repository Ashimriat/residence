declare type Participant = {
  name: string;
  avatar?: string;
  id: string;
};

declare type ClanData = {
  id: string;
  title: string;
  ownerId: string;
  description: string;
  image?: string;
  rating: number;
  participants: Participant[];
};

declare type ClanCreationData = Pick<ClanData, 'title' | 'description' | 'image'>;
