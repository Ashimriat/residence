declare type ClanParticipant = {
  name: string;
  avatar?: string;
  id: string;
};

declare type ClanData = {
  id: string;
  title: string;
  description: string;
  image?: string;
  rating: number;
  participants: ClanParticipant[];
};

declare type ClanCreationData = Pick<ClanData, 'title' | 'description' | 'image'>;
