export default (src: string): string => {
  if (!src.length) return '';
  return src[0].toUpperCase() + src.substring(1);
}