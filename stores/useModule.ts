/* Armazena o módulo atual do usuário */
/* Renderiza os Links das rotas de acordo com o módulo */

export default defineStore("useModule", () => {
  const asideLinks = ref<AsideLinksItem>();

  const getAsideLinks = (value: string | null) => {
    asideLinks.value = asideLinksTest[value as keyof typeof asideLinksTest];

    getSearchAsideLinks();
  };

  const getSearchAsideLinks = () => {
    if (asideLinks.value) {
      return Object.keys(asideLinks.value).map((item) => {
        const hydrateSubLinks = asideLinks.value![item].subLinks.map(
          (subLink: any) => {
            return {
              label: subLink.name,
              icon: subLink.icon,
              to: subLink.path,
              id: subLink.name,
            };
          }
        );

        return {
          key: asideLinks.value![item].name,
          label: asideLinks.value![item].name,
          commands: hydrateSubLinks,
        };
      });
    } else {
      return null;
    }
  };

  const setModule = (value: string) => {
    useCookie("module").value = value;

    getAsideLinks(value);
  };

  const getModule = () => {
    const module = useCookie("module").value;

    if (module) {
      getAsideLinks(module);
      return module;
    }

    return null;
  };

  const saveQuickAcess = (item: SubLink) => {
    const code = item.path.split("/");

    if (asideLinks.value) {
      const sb = asideLinks.value[code[3]].subLinks;

      // Setando contador de acesso
      sb.find((value) => value.name === item.name)!.counter++;
    }
  };

  return {
    getModule,
    setModule,
    asideLinks,
    getSearchAsideLinks,
    saveQuickAcess,
  };
});
