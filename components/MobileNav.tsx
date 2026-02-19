import useScroll from "@/hooks/useScroll";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { NAV_SECTIONS } from "@/constants";
import { useTranslation } from "next-i18next";

interface Props {
  handleOpenMenu: () => void;
  isOpenMenu: boolean;
}

const MobileNav = ({ handleOpenMenu, isOpenMenu }: Props) => {
  const { currentMobile, handleClickMobile } = useScroll();
  const { t } = useTranslation('common');

  const handleNavigation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleOpenMenu();
    handleClickMobile(e);
  };

  const navAnimation = isOpenMenu ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {NAV_SECTIONS.map((s) => (
          <div
            key={s.key}
            data-section={s.key}
            className={currentMobile === s.key ? "selected-mobile" : "nav-link-mobile"}
            onClick={handleNavigation}
          >
            {t(`nav.${s.key}`)}
          </div>
        ))}
      </div>
      <div
        onClick={handleOpenMenu}
        className="absolute cursor-pointer right-[2rem] top-[2rem] w-[2rem] h-[2rem] text-yellow-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
