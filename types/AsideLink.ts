export type SubLink = {
  name: string;
  path: string;
  icon?: string;
};

export type BreadcumbLinks = {
  label: string;
  icon?: string;
  to?: string;
};

export type AsideLinksItem = {
  [key: string]: {
    name: string;
    icon: string;
    baseURL: string;
    subLinks: SubLink[];
  };
};

export interface IAsideLinks {
  [key: string]: AsideLinksItem;
}
