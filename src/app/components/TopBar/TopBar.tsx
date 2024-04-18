'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import styles from './styles/TopBar.module.css'
import LangEnum from '@/enum/lang-enum'
import ptBr from './i18n/ptBR'
import esES from './i18n/esES'
import enUS from './i18n/enUS'
import { ActionsContext } from '@/context/ActionsContext'

const TopBar = () => {
  const { visibleSectionIndex } = useContext(ActionsContext)
  const [lang, setLang] = useState<LangEnum>(LangEnum.EN_US)
  const [underlineStyle, setUnderlineStyle] = useState({})
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    defineLanguage(lang)
  }, [lang])

  const defineLanguage = (lang: LangEnum) => {
    let home
    let skills
    let works
    let contact

    switch (lang) {
      case LangEnum.EN_US:
        home = enUS.menu.home
        skills = enUS.menu.skills
        works = enUS.menu.works
        contact = enUS.menu.contact
        break
      case LangEnum.ES_ES:
        home = esES.menu.home
        skills = esES.menu.skills
        works = esES.menu.works
        contact = esES.menu.contact
        break
      case LangEnum.PT_BR:
        home = ptBr.menu.home
        skills = ptBr.menu.skills
        works = ptBr.menu.works
        contact = ptBr.menu.contact
        break
    }

    return {
      home,
      skills,
      works,
      contact,
    }
  }

  useEffect(() => {
    setActiveItem(visibleSectionIndex)
  }, [visibleSectionIndex])

  const setActiveItem = (index: number) => {
    const menuItem = document.querySelectorAll(`.${styles.menu} ul li`)[index]
    const { left, width } = menuItem.getBoundingClientRect()
    const parentLeft: any =
      menuItem?.parentElement?.getBoundingClientRect().left
    setUnderlineStyle({ left: left - parentLeft, width })
  }

  const updateUnderline = (index: number) => {
    setActiveItem(index)
  }

  const onMouseOut = () => {
    setActiveItem(visibleSectionIndex)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.menu} ref={menuRef}>
        <ul>
          <li
            onMouseEnter={() => updateUnderline(0)}
            onMouseOut={onMouseOut}
            id={'home'}
          >
            <Link to={'home'} spy={true} smooth={true} duration={0}>
              {defineLanguage(lang).home}
            </Link>
          </li>
          <li onMouseEnter={() => updateUnderline(1)} onMouseOut={onMouseOut}>
            <Link to={'skills'} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).skills}
            </Link>
          </li>
          <li onMouseEnter={() => updateUnderline(2)} onMouseOut={onMouseOut}>
            <Link to={'works'} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).works}
            </Link>
          </li>
          <li onMouseEnter={() => updateUnderline(3)} onMouseOut={onMouseOut}>
            <Link to={'contact'} spy={true} smooth={true} duration={300}>
              {defineLanguage(lang).contact}
            </Link>
          </li>
          <div className={styles.animation} style={underlineStyle}></div>
        </ul>
      </nav>
      <div>
        <button onClick={() => setLang(LangEnum.EN_US)}>
          {LangEnum.EN_US}
        </button>
        <button onClick={() => setLang(LangEnum.ES_ES)}>
          {LangEnum.ES_ES}
        </button>
        <button onClick={() => setLang(LangEnum.PT_BR)}>
          {LangEnum.PT_BR}
        </button>
      </div>
    </div>
  )
}

export default TopBar
