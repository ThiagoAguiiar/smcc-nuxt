/* Armazena o módulo atual do usuário */

export default defineStore("useModule", () => {
  const cookieRef = useRuntimeConfig().public.smccSettingsCookie;
  const s = useSidebar();

  const setModule = (value: string) => {
    localStorage.setItem(cookieRef, JSON.stringify({ currentModule: value } as ISetupSettings));
    s.getAsideLinks();
  };

  const getModule = (): string => {
    if (process.client) {
      const module = JSON.parse(localStorage.getItem(cookieRef) as string) as ISetupSettings;

      s.getAsideLinks();

      if (module) return module.currentModule;

      return "";
    }

    return "";
  };

  return {
    getModule,
    setModule,
  };
});
