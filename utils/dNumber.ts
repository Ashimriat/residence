export default (src: number): string => (
  src >= 10 ? `${src}` : `0${src}`
);
