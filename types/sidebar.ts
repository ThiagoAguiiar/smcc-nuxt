export type SubLink = {
  name: string;
  path: string;
  icon?: string;
  counter: number;
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

export type BreadcumbLinks = {
  label: string;
  icon?: string;
  to?: string;
};

export type CommandPalleteItem = {
  label: string;
  icon: string;
  to: string;
  id: string;
};

export type CommandPalleteList = {
  key: string;
  label: string;
  commands: CommandPalleteItem[];
};
