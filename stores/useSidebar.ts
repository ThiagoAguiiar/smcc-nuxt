const navigation: IAsideLinks = {
  cientifico: {
    eventos: {
      name: "Eventos",
      icon: "fluent:calendar-24-regular",
      baseURL: "/dashboard/cientifico/eventos/",

      subLinks: [
        {
          name: "Lista de eventos",
          path: "",
          icon: "fluent:list-20-regular",
          counter: 0,
        },
        {
          name: "Cadastrar evento",
          path: "cadastrar",
          icon: "fluent:add-circle-20-regular",
          counter: 0,
        },
        {
          name: "Aprovar evento",
          path: "/",
          icon: "fluent:checkmark-square-20-regular",
          counter: 0,
        },
        {
          name: "Eventos comerciais",
          path: "/",
          icon: "fluent:globe-20-regular",
          counter: 0,
        },
        {
          name: "Eventos especiais",
          path: "/",
          icon: "fluent:star-20-regular",
          counter: 0,
        },
      ],
    },
    inscricoes: {
      name: "Inscrições",
      icon: "fluent:people-24-regular",
      baseURL: "/dashboard/cientifico/inscricoes",
      subLinks: [
        {
          name: "Matrículas",
          path: "/",
          icon: "fluent:calligraphy-pen-20-regular",
          counter: 0,
        },
        {
          name: "Deficiências",
          path: "/",
          icon: "fluent-mdl2:wheelchair",
          counter: 0,
        },
        {
          name: "Cadastrar certificados",
          path: "/",
          icon: "fluent:certificate-20-regular",
          counter: 0,
        },
        {
          name: "Gerar certificados",
          path: "/",
          icon: "fluent:content-view-gallery-20-regular",
          counter: 0,
        },
      ],
    },
    recibos: {
      name: "Recibos",
      icon: "fluent:payment-wireless-20-regular",
      baseURL: "/dashboard/cientifico/recibos",

      subLinks: [
        {
          name: "Recibos",
          path: "/",
          icon: "fluent:money-calculator-20-regular",
          counter: 0,
        },
        {
          name: "Gerar recibo",
          path: "/",
          icon: "fluent:money-settings-20-regular",
          counter: 0,
        },
      ],
    },
    relatorios: {
      name: "Relatórios",
      icon: "fluent:ticket-diagonal-20-regular",
      baseURL: "/dashboard/cientifico/relatorios",

      subLinks: [
        {
          name: "Associados quites",
          path: "/",
          icon: "fluent:people-community-20-regular",
          counter: 0,
        },
        {
          name: "Evento especial",
          path: "/",
          icon: "fluent:star-20-regular",
          counter: 0,
        },
        {
          name: "Lista de presença",
          path: "/",
          icon: "fluent:list-20-regular",
          counter: 0,
        },
      ],
    },
    usuarios: {
      name: "Usuários",
      icon: "fluent:people-20-regular",
      baseURL: "/dashboard/cientifico/usuarios",

      subLinks: [
        {
          name: "Associados",
          path: "/",
          icon: "fluent:people-community-20-regular",
          counter: 0,
        },
        {
          name: "Dependentes",
          path: "/",
          icon: "fluent:people-add-20-regular",
          counter: 0,
        },
        {
          name: "Não associados",
          path: "/",
          icon: "fluent:list-20-regular",
          counter: 0,
        },
        {
          name: "Associados excluídos",
          path: "/",
          icon: "fluent:people-prohibited-20-regular",
          counter: 0,
        },
        {
          name: "Administradores",
          path: "/",
          icon: "fluent:shield-badge-20-regular",
          counter: 0,
        },
      ],
    },
  },
};

/* Gerencia as rotas visíveis de acordo com o módulo selecionado */
export default defineStore("useSidebar", () => {
  const asideLinks = ref<AsideLinksItem>();
  const asideLinksSearch = ref<CommandPalleteList[]>([]);

  const cookieRef = useRuntimeConfig().public.smccSettingsCookie;

  const setCounter = (item: SubLink) => {
    const code = item.path.split("/");

    if (asideLinks.value) {
      const sb = asideLinks.value[code[3]].subLinks;
      sb.find((value) => value.name == item.name)!.counter++;
    }
  };

  const getAsideLinks = () => {
    const currentModule = JSON.parse(
      localStorage.getItem(cookieRef) as string
    ) as ISetupSettings;

    console.log(currentModule);

    if (currentModule) {
      // Armazena os links visíveis no sidebar
      asideLinks.value =
        navigation[currentModule.currentModule as keyof typeof navigation];
    }

    if (asideLinks.value) {
      // Organiza os links para pesquisa no command palette
      asideLinksSearch.value = Object.keys(asideLinks.value).map((item) => {
        const hydrateSubLinks = asideLinks.value![item].subLinks.map(
          (subLink: any) => {
            return {
              label: subLink.name,
              icon: subLink.icon,
              to: asideLinks.value![item].baseURL + subLink.path,
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
    }
  };

  return { asideLinks, asideLinksSearch, getAsideLinks, setCounter };
});
