type AllArgs = string | Array<string | boolean> | Record<string, boolean | undefined>;
type NotNameArgs = Exclude<AllArgs, string>;
type ClassesDict = Record<string, boolean>;

const bMod = (...src: NotNameArgs[]): ClassesDict => {
  let res: Record<string, boolean> = {};
  src.forEach((val) => {
    if (Array.isArray(val)) {
      res = {
        ...res,
        ...val.reduce((acc, mod) => {
          if (typeof mod === 'string') {
            acc[mod] = true;
          }
          return acc;
        }, <ClassesDict>{}),
      };
    } else {
      getEntries(val).forEach(([key, value]) => {
        res[key] = !!value;
      });
    }
  });
  return res;
};

export default function useBEM(componentName: string) {
  const $b = useBem(componentName);

  return (...args: AllArgs[]): string => {
    let res!: string;
    const argsToProcessMatchesArr: string[] = [];
    if (!args.length) {
      res = $b();
    } else {
      const isFirstArgName = typeof args[0] === 'string';
      const sliceFromIndex = !isFirstArgName ? 0 : 1;
      const classesDict = bMod(...args.slice(sliceFromIndex) as NotNameArgs[]);
      argsToProcessMatchesArr.push(...Object.keys(classesDict));
      res = isFirstArgName
        ? $b(args[0], classesDict)
        : $b(classesDict);
    }
    const argsToProcessMatchesDict = argsToProcessMatchesArr.reduce((acc, val) => {
      acc[val.replaceAll('_', '-')] = true;
      return acc;
    }, <ClassesDict>{});
    const kebabMatches = res.match(/(\w{1,}(-\w{1,})+)/g);
    (kebabMatches ?? []).forEach((match) => {
      let replacement!: string;
      if (argsToProcessMatchesDict[match]) {
        replacement = match.replaceAll('-', '_');
      } else {
        replacement = match
          .split('-')
          .map((val, i) => (i === 0 ? val : capitalize(val)))
          .join('');
      }
      res = res.replace(match, replacement);
    });
    return res;
  };
}
export type { ClassesDict };
