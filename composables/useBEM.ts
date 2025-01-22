type AllArgs = string | Array<string | boolean> | Record<string, boolean | undefined>;
type NotNameArgs = Exclude<AllArgs, string>;
type PreparedClasses = Record<string, boolean>;

const bMod = (...src: NotNameArgs[]): PreparedClasses => {
  let res: Record<string, boolean> = {};
  for (const val of src) {
    if (Array.isArray(val)) {
      res = {
        ...res,
        ...val.reduce((acc, mod) => {
          if (typeof mod === 'string') {
            acc[mod] = true;
          }
          return acc;
        }, <PreparedClasses>{}),
      };
    } else {
      for (const [key, value] of getEntries(val)) {
        res[key] = !!value;
      }
    }
  }
  return res;
};

export default function useBEM(componentName: string) {
  const $b = useBem(componentName);

  return (...args: AllArgs[]): string => {
    let res!: string
    if (!args.length) {
      res =  $b();
    } else if (typeof args[0] !== 'string') {
      res = $b(bMod(...args as NotNameArgs[]));
    } else {
      res = $b(args[0], bMod(...args.slice(1) as NotNameArgs[]));
    }
    const kebabMatches = res.match(/(\w{1,}(-\w{1,})+)/g);
    for (const match of kebabMatches ?? []) {
      const replacement = match
        .split('-')
        .map((val, i) => i === 0 ? val : capitalize(val))
        .join(''); 
      res = res.replace(match, replacement);
    }
    return res;
  }
}