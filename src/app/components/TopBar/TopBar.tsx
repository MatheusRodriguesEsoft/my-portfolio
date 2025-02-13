"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import styles from "./styles/TopBar.module.css";
import LangEnum from "@/enum/lang-enum";
import ptBr from "./i18n/ptBR";
import esES from "./i18n/esES";
import enUS from "./i18n/enUS";
import { ActionsContext } from "@/context/ActionsContext";
import { labelLangs } from "@/utils/lang";
import "animate.css";

const TopBar = () => {
  const { visibleSectionIndex } = useContext(ActionsContext);
  const [lang, setLang] = useState<LangEnum>(LangEnum.EN_US);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [showButtons, setShowButtons] = useState(false);
  const [activeButtons, setActiveButtons] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    defineLanguage(lang);
    setActiveItem(visibleSectionIndex);
  }, [lang]);

  const defineLanguage = (lang: LangEnum) => {
    let home;
    let skills;
    let works;
    let contact;

    switch (lang) {
      case LangEnum.EN_US:
        home = enUS.menu.home;
        skills = enUS.menu.skills;
        works = enUS.menu.works;
        contact = enUS.menu.contact;
        break;
      case LangEnum.ES_ES:
        home = esES.menu.home;
        skills = esES.menu.skills;
        works = esES.menu.works;
        contact = esES.menu.contact;
        break;
      case LangEnum.PT_BR:
        home = ptBr.menu.home;
        skills = ptBr.menu.skills;
        works = ptBr.menu.works;
        contact = ptBr.menu.contact;
        break;
    }

    return {
      home,
      skills,
      works,
      contact,
    };
  };

  useEffect(() => {
    setActiveItem(visibleSectionIndex);
    setActiveItem(visibleSectionIndex);
    const handleResize = () => {
      setActiveItem(visibleSectionIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleSectionIndex]);

  const setActiveItem = (index: number) => {
    const menuItem = document.querySelectorAll(`.${styles.menu} ul li`)[index];
    const { left, width } = menuItem.getBoundingClientRect();
    const parentLeft: any =
      menuItem?.parentElement?.getBoundingClientRect().left;
    setUnderlineStyle({ left: left - parentLeft, width });
  };

  const updateUnderline = (index: number) => {
    setActiveItem(index);
  };

  const onMouseOut = () => {
    setActiveItem(visibleSectionIndex);
  };

  const getLabelByValue = (value: string) => {
    const foundLabel = labelLangs.find((lang) => lang.value === value);
    return foundLabel ? foundLabel.label : "N/A";
  };

  return (
    <div className={styles.content}>
      <nav className={styles.menu} ref={menuRef}>
        <div
          className={`${styles.logo} animate__animated animate__slideInDown `}
        >
          MR.
        </div>
        <ul onMouseOver={() => setShowButtons(false)}>
          <li
            className={"animate__animated animate__slideInDown"}
            onMouseEnter={() => updateUnderline(0)}
            onMouseOut={onMouseOut}
            id={"home"}
          >
            <Link to={"home"} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).home}
            </Link>
          </li>
          <li
            className={"animate__animated animate__slideInDown"}
            onMouseEnter={() => updateUnderline(1)}
            onMouseOut={onMouseOut}
          >
            <Link to={"skills"} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).skills}
            </Link>
          </li>
          <li
            className={"animate__animated animate__slideInDown"}
            onMouseEnter={() => updateUnderline(2)}
            onMouseOut={onMouseOut}
          >
            <Link to={"works"} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).works}
            </Link>
          </li>
          <li
            className={"animate__animated animate__slideInDown"}
            onMouseEnter={() => updateUnderline(3)}
            onMouseOut={onMouseOut}
          >
            <Link to={"contact"} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).contact}
            </Link>
          </li>
          <div
            className={`${styles.animation} animate__animated animate__fadeInRightBig`}
            style={underlineStyle}
          ></div>
        </ul>
        <div
          onMouseEnter={() => setShowButtons(true)}
          className={`${styles.actions_lang_container} animate__animated animate__slideInDown`}
          onClick={() => setShowButtons(!showButtons)}
        >
          <div>
            <span className={styles.lang_label}>{getLabelByValue(lang)}</span>
          </div>
          {showButtons && (
            <div
              className={styles.btn_langs_container}
              onMouseOver={() => setShowButtons(true)}
              onMouseOut={() => setShowButtons(false)}
            >
              <button
                className={`${styles.btn_lang} ${
                  lang === LangEnum.EN_US ? styles.hidden : ""
                }`}
                onClick={() => setLang(LangEnum.EN_US)}
              >
                {getLabelByValue(LangEnum.EN_US)}
              </button>
              <button
                className={`${styles.btn_lang} ${
                  lang === LangEnum.ES_ES ? styles.hidden : ""
                }`}
                onClick={() => setLang(LangEnum.ES_ES)}
              >
                {getLabelByValue(LangEnum.ES_ES)}
              </button>
              <button
                className={`${styles.btn_lang} ${
                  lang === LangEnum.PT_BR ? styles.hidden : ""
                }`}
                onClick={() => setLang(LangEnum.PT_BR)}
              >
                {getLabelByValue(LangEnum.PT_BR)}
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
