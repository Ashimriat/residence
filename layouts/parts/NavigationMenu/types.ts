import type { EIcons } from '~/components/base';


type MenuItem = {
  title: string;
  url: string;
  icon?: EIcons;
};
export type MenuStructure = Array<{
  section: Optional<MenuItem, 'url'>;
  items?: MenuItem[];
}>;
