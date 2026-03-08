const BASE_DEMO_PATH = "/cross-document-view-transition";
const LS_TRANSITION_TYPE = "transition_type";

function applyTransitionTypeToPage(type) {
  const element = document.documentElement;
  element.dataset.transition = type;
}

function deleteTransitionTypeFromPage() {
  const element = document.documentElement;
  delete element.dataset.transition;
}

function defineTransitionType(oldEntry, newEntry) {
  const HOME_PAGE_REGEX = /index\.html/;
  const GOOD_PAGE_REGEX = /good-\d+/;
  const USER_PAGE_REGEX = /user-\d+/;

  const fromUrl = new URL(oldEntry.url);
  const toUrl = new URL(newEntry.url);

  const fromPathname = fromUrl.pathname.replace(BASE_DEMO_PATH, "");
  const toPathname = toUrl.pathname.replace(BASE_DEMO_PATH, "");

  const isReload = fromPathname === toPathname;

  const isForwards =
    (HOME_PAGE_REGEX.test(fromPathname) && GOOD_PAGE_REGEX.test(toPathname)) ||
    (GOOD_PAGE_REGEX.test(fromPathname) && USER_PAGE_REGEX.test(toPathname)) ||
    (GOOD_PAGE_REGEX.test(fromPathname) && GOOD_PAGE_REGEX.test(toPathname));

  const isBackwards =
    (GOOD_PAGE_REGEX.test(fromPathname) && HOME_PAGE_REGEX.test(toPathname)) ||
    (USER_PAGE_REGEX.test(fromPathname) && GOOD_PAGE_REGEX.test(toPathname)) ||
    (USER_PAGE_REGEX.test(fromPathname) && HOME_PAGE_REGEX.test(toPathname));

  if (isReload) return "reload";
  if (isForwards) return "forwards";
  if (isBackwards) return "backwards";

  console.log(fromPathname, toPathname);

  return "unknown";
}

// До рендера другой страницы
window.addEventListener("pagereveal", async (e) => {
  console.log("REVEAL");

  // Браузер пользователя не поддерживает Navigation API
  if (!navigation) {
    const transitionType = localStorage.getItem(LS_TRANSITION_TYPE);
    applyTransitionTypeToPage(transitionType);

    await e.viewTransition.finished;
    deleteTransitionTypeFromPage();
  }

  // Стандартный переход между страницами
  if (e.viewTransition) {
    const transitionType = defineTransitionType(
      navigation.activation.from,
      navigation.activation.entry,
    );

    applyTransitionTypeToPage(transitionType);

    await e.viewTransition.finished;
    deleteTransitionTypeFromPage();
  }

  // Пользователь перезагрузил страницу или зашел с другого источника
  if (!e.viewTransition && navigation.activation.navigationType === "reload") {
    applyTransitionTypeToPage("reload");

    // Принудительно запускам переход
    const transition = document.startViewTransition(() => {});

    await transition.finished;
    deleteTransitionTypeFromPage();
  }
});

// Перед переходом на другую страницу
window.addEventListener("pageswap", async (e) => {
  console.log("SWAP");

  // Браузер пользователя не поддерживает Navigation API
  if (!window.navigation) {
    const transitionType = defineTransitionType(
      e.activation.from,
      e.activation.entry,
    );

    localStorage.setItem(LS_TRANSITION_TYPE, transitionType);
  }
});
