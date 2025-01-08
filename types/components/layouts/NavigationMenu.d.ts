import type { EIcons } from '~/components/base';


type MenuItem = {
  title: string;
  url: string;
  icon?: EIcons;
};
declare type MenuStructure = Array<{
  section: Optional<MenuItem, 'url'>;
  items?: MenuItem[];
}>;
