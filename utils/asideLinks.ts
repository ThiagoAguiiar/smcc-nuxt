export const asideLinksTest: IAsideLinks = {
  cientifico: {
    eventos: {
      name: "Eventos",
      icon: "fluent:calendar-24-regular",
      baseURL: "/dashboard/cientifico/eventos/",

      subLinks: [
        {
          name: "Lista de eventos",
          path: "lista",
          icon: "fluent:list-20-regular",
        },
        {
          name: "Cadastrar evento",
          path: "cadastrar",
          icon: "fluent:add-circle-20-regular",
        },
        {
          name: "Aprovar evento",
          path: "/",
          icon: "fluent:checkmark-square-20-regular",
        },
        {
          name: "Eventos comerciais",
          path: "/",
          icon: "fluent:globe-20-regular",
        },
        {
          name: "Eventos especiais",
          path: "/",
          icon: "fluent:star-20-regular",
        },
      ],
    },
    inscricoes: {
      name: "Inscrições",
      icon: "fluent:people-24-regular",
      baseURL: "/dashboard/cientifico/inscricoes/",
      subLinks: [
        {
          name: "Matrículas",
          path: "/",
          icon: "fluent:calligraphy-pen-20-regular",
        },
        {
          name: "Deficiências",
          path: "/",
          icon: "fluent-mdl2:wheelchair",
        },
        {
          name: "Cadastrar certificados",
          path: "/",
          icon: "fluent:certificate-20-regular",
        },
        {
          name: "Gerar certificados",
          path: "/",
          icon: "fluent:content-view-gallery-20-regular",
        },
      ],
    },
    recibos: {
      name: "Recibos",
      icon: "fluent:payment-wireless-20-regular",
      baseURL: "/dashboard/cientifico/recibos/",

      subLinks: [
        {
          name: "Recibos",
          path: "/",
          icon: "fluent:money-calculator-20-regular",
        },
        {
          name: "Gerar recibo",
          path: "/",
          icon: "fluent:money-settings-20-regular",
        },
      ],
    },
    relatorios: {
      name: "Relatórios",
      icon: "fluent:ticket-diagonal-20-regular",
      baseURL: "/dashboard/cientifico/relatorios/",

      subLinks: [
        {
          name: "Associados quites",
          path: "/",
          icon: "fluent:people-community-20-regular",
        },
        {
          name: "Evento especial",
          path: "/",
          icon: "fluent:star-20-regular",
        },
        {
          name: "Lista de presença",
          path: "/",
          icon: "fluent:list-20-regular",
        },
      ],
    },
    usuarios: {
      name: "Usuários",
      icon: "fluent:people-20-regular",
      baseURL: "/dashboard/cientifico/usuarios/",

      subLinks: [
        {
          name: "Associados",
          path: "/",
          icon: "fluent:people-community-20-regular",
        },
        {
          name: "Dependentes",
          path: "/",
          icon: "fluent:people-add-20-regular",
        },
        {
          name: "Não associados",
          path: "/",
          icon: "fluent:list-20-regular",
        },
        {
          name: "Associados excluídos",
          path: "/",
          icon: "fluent:people-prohibited-20-regular",
        },
        {
          name: "Administradores",
          path: "/",
          icon: "fluent:shield-badge-20-regular",
        },
      ],
    },
  },
};
