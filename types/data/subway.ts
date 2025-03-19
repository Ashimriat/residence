type Branch = `standard${number}${string}` | 'mcc' | `mcd${number}${string}`;


export type SubwayData = {
  branchType: Branch;
  stationName: string;
  id: string;
};
