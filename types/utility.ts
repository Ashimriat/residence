export type Optional<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & {
  [P in K]?: T[P];
};

export type ByDevice<T> = {
  desktop: T;
  mobile: T;
};

export type ByAxis<T> = {
  x: T;
  y: T;
};
