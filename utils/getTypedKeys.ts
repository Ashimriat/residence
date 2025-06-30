export default <T extends object>(src: T): (keyof T)[] => (
  Object.keys(src) as (keyof T)[]
);
