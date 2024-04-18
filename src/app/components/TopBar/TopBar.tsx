'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import styles from './styles/TopBar.module.css'
import LangEnum from '@/enum/lang-enum'
import ptBr from './i18n/ptBR'
import esES from './i18n/esES'
import enUS from './i18n/enUS'

const TopBar = () => {
  const [lang, setLang] = useState<LangEnum>(LangEnum.EN_US)
  const [underlineStyle, setUnderlineStyle] = useState({})
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    defineLanguage(lang)
    // Adicionando o ouvinte de evento de rolagem personalizado quando o componente é montado
    window.addEventListener('customScroll', handleCustomScroll)

    return () => {
      // Removendo o ouvinte de evento de rolagem personalizado quando o componente é desmontado
      window.removeEventListener('customScroll', handleCustomScroll)
    }
  }, [lang])

  const handleCustomScroll = () => {
    // Lógica para atualizar o estilo da barra de underline aqui
    // Você pode usar menuRef.current para obter uma referência ao elemento do menu
  }

  // Função para acionar o evento de rolagem personalizado
  const triggerCustomScrollEvent = () => {
    const customScrollEvent = new Event('customScroll')
    window.dispatchEvent(customScrollEvent)
  }

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

  // Função para atualizar o estilo da barra de underline
  const updateUnderline = (index: number) => {
    setActiveMenuItem(index);
    const menuItem = document.querySelectorAll(`.${styles.menu} ul li`)[index]
    const { left, width } = menuItem.getBoundingClientRect()
    const parentLeft: any =
      menuItem?.parentElement?.getBoundingClientRect().left
    setUnderlineStyle({ left: left - parentLeft, width })
  }

  const onMouseOut = () => {
    // console.log(activeMenuItem)
    // if (activeMenuItem !== null) {
    //   const menuItem = menuRef.current?.querySelectorAll(`.${styles.menu} ul li`)[activeMenuItem];
    //   if (menuItem) {
    //     const { left, width } = menuItem.getBoundingClientRect();
    //     const parentLeft: any = menuItem.parentElement?.getBoundingClientRect().left;
    //     setUnderlineStyle({ left: left - parentLeft, width });
    //   }
    // }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu} ref={menuRef}>
        <ul>
          <li
            onMouseEnter={() => updateUnderline(0)}
            onMouseOut={onMouseOut}
            id={'home'}
          >
            <Link
              to={'home'}
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => updateUnderline(0)}
            >
              {defineLanguage(lang).home}
            </Link>
          </li>
          <li onMouseEnter={() => updateUnderline(1)} onMouseOut={onMouseOut}>
            <Link
              to={'skills'}
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={() => updateUnderline(1)}
            >
              {defineLanguage(lang).skills}
            </Link>
          </li>
          <li onMouseEnter={() => updateUnderline(2)} onMouseOut={onMouseOut}>
            <Link
              to={'works'}
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={() => updateUnderline(2)}
            >
              {defineLanguage(lang).works}
            </Link>
          </li>
          <li onMouseEnter={() => updateUnderline(3)} onMouseOut={onMouseOut}>
            <Link
              to={'contact'}
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={() => updateUnderline(3)}
            >
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
