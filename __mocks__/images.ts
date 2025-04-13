const IMAGE = 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg';

const mockGalleryImages = (length: number) => Array.from({ length }, () => ({
  thumbnailImageSrc: IMAGE,
  alt: IMAGE,
}));


export { mockGalleryImages };
