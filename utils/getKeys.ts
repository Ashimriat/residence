export default <T extends object>(src: T): Array<keyof T> => (
  Object.keys(src) as Array<keyof T>
);
