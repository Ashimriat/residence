import { mockText } from './text';


const REVIEW = {
  username: 'Дмитрий',
  avatar: undefined,
  game: 'DND',
  text: mockText(),
};


const mockReviews = (length: number) => Array.from({ length }, () => REVIEW);


export { mockReviews };
