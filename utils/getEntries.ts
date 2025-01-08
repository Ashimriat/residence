export default <T extends object>(src: T): [keyof T, T[keyof T]][] => (
  Object.entries(src) as [keyof T, T[keyof T]][]
);
