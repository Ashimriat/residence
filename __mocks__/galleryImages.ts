const IMAGES = [
  'https://i.imgur.com/Nt8wv9C.jpeg',
  'https://i.imgur.com/hJT4hrb.jpeg',
  'https://i.imgur.com/UuEiueb.jpeg',
  'https://i.imgur.com/oPzVHBF.jpeg',
  'https://i.imgur.com/9EdCgza.jpeg',
  'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg'
]

const mockGalleryImages = (length: number) => Array.from({ length }, () => ({
  id: crypto.randomUUID(),
  image: IMAGES[Math.round(Math.random() * 5)],
  alt: '',
}));


export { mockGalleryImages };
