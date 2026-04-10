import gsap from "gsap";

export function setupMenuOverlay({
  menuToggleButton,
  menuCloseButton,
  menuOverlay,
  menuOverlayLinks,
  trackAnimation,
}) {
  if (!menuToggleButton || !menuCloseButton || !menuOverlay) {
    return () => {};
  }

  const menuOverlayInner = menuOverlay.querySelector(".menu-overlay-inner");
  const menuOverlayLogo = menuOverlay.querySelector(".menu-logo");
  const menuKicker = menuOverlay.querySelector(".menu-kicker");
  const menuMeta = menuOverlay.querySelector(".menu-meta");
  const menuLinkItems = gsap.utils.toArray(".menu-nav-enter", menuOverlay);
  let lockedScrollY = 0;

  const menuTimeline = trackAnimation(
    gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
      onReverseComplete: () => {
        menuOverlay.classList.remove("is-open");
        menuOverlay.setAttribute("aria-hidden", "true");
      },
    }),
  );

  gsap.set(menuOverlay, { opacity: 0 });
  gsap.set(menuOverlayInner, { y: -36, opacity: 0.94 });
  gsap.set([menuOverlayLogo, menuCloseButton, menuKicker, menuMeta], { y: -14, opacity: 0 });
  gsap.set(menuLinkItems, { y: -24, opacity: 0 });

  menuTimeline
    .to(menuOverlay, { opacity: 1, duration: 0.28 }, 0)
    .to(menuOverlayInner, { y: 0, opacity: 1, duration: 0.42 }, 0)
    .to([menuOverlayLogo, menuCloseButton], { y: 0, opacity: 1, duration: 0.24, stagger: 0.05 }, 0.08)
    .to(menuKicker, { y: 0, opacity: 1, duration: 0.22 }, 0.14)
    .to(menuLinkItems, { y: 0, opacity: 1, duration: 0.34, stagger: 0.05 }, 0.16)
    .to(menuMeta, { y: 0, opacity: 1, duration: 0.24 }, 0.24);

  const lockBodyScroll = () => {
    lockedScrollY = window.scrollY;
    document.body.classList.add("menu-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  };

  const unlockBodyScroll = ({ restoreScroll } = { restoreScroll: true }) => {
    const scrollY = lockedScrollY;

    document.body.classList.remove("menu-open");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("left");
    document.body.style.removeProperty("right");
    document.body.style.removeProperty("width");

    if (restoreScroll) {
      window.scrollTo(0, scrollY);
    }

    lockedScrollY = 0;
  };

  const openMenu = () => {
    menuOverlay.classList.add("is-open");
    menuOverlay.setAttribute("aria-hidden", "false");
    menuToggleButton.setAttribute("aria-expanded", "true");
    menuToggleButton.classList.add("is-active");
    lockBodyScroll();
    menuTimeline.play();
  };

  const closeMenu = () => {
    const isMenuOpen = menuOverlay.classList.contains("is-open");

    menuToggleButton.setAttribute("aria-expanded", "false");
    menuToggleButton.classList.remove("is-active");

    if (isMenuOpen) {
      unlockBodyScroll();
    } else {
      unlockBodyScroll({ restoreScroll: false });
    }

    menuTimeline.reverse();
  };

  const onToggleClick = () => {
    if (menuOverlay.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  };

  const onOverlayClick = (event) => {
    if (event.target === menuOverlay) {
      closeMenu();
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape" && menuOverlay.classList.contains("is-open")) {
      closeMenu();
    }
  };

  menuToggleButton.addEventListener("click", onToggleClick);
  menuCloseButton.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", onOverlayClick);
  menuOverlayLinks.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("keydown", onKeyDown);

  return () => {
    menuToggleButton.removeEventListener("click", onToggleClick);
    menuCloseButton.removeEventListener("click", closeMenu);
    menuOverlay.removeEventListener("click", onOverlayClick);
    menuOverlayLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    window.removeEventListener("keydown", onKeyDown);
    closeMenu();
  };
}
