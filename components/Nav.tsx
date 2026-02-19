import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import useScroll from "@/hooks/useScroll";
import { NAV_SECTIONS } from "@/constants";
import { useTranslation } from "next-i18next";

interface Props {
  handleOpenMenu: () => void;
}

const Nav: React.FC<Props> = ({ handleOpenMenu }) => {
  const { current, handleClick } = useScroll();
  const { t } = useTranslation('common');

  return (
    <div className="w-[100%] fixed top-0 h-[12vh] bg-[#141c27] shadow-md z-[10000000000]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          DIDIER
          <span className="text-yellow-300"> PEREIRA</span>
        </h1>
        {NAV_SECTIONS.map((s) => (
          <span
            key={s.key}
            data-section={s.key}
            className={current === s.key ? "selected" : "nav-link"}
            onClick={handleClick}
          >
            {t(`nav.${s.key}`)}
          </span>
        ))}
        <div onClick={handleOpenMenu}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
