'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { iconsSkills } from '@/utils/icons'
import { works } from '@/utils/works'
import { Element } from 'react-scroll'
import { useContext, useState } from 'react'
import { ActionsContext } from '@/context/ActionsContext'
import Lottie from 'react-lottie'
import * as animationData from '../../public/lottie/Animation - 1714008687731.json'
import 'animate.css'

export default function Home() {
  const { sectionRefs } = useContext(ActionsContext)
  const [iconColor, setIconColor] = useState<string>('#FFFFFF')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Element name={'home'} className={'element'} id={'home'}>
          <section className={styles.section} ref={sectionRefs[0]} id={'home'}>
            <div className={styles.home_content}>
              <div className={styles.bio_content}>
                <h1 className={styles.h1}>
                  <span className={`${styles.first_name} animate__animated animate__fadeInLeftBig`}>Matheus</span>
                  <span className={`${styles.last_name} animate__animated animate__fadeInRightBig`}>Rodrigues</span>
                </h1>
                <span className={styles.span}>Engenheiro de Software</span>
                <span className={styles.span}>
                  Sou um engenheiro de software apaixonado pela arte de
                  transformar ideias em realidade digital. Com uma sólida
                  formação e anos de experiência como desenvolvedor full stack,
                  trago um compromisso inabalável com a excelência técnica e a
                  inovação. Meu trabalho vai além de simplesmente escrever
                  linhas de código; é sobre criar soluções robustas e elegantes
                  que impulsionam a experiência do usuário e fazem a diferença
                  no mundo digital. Sou motivado pela busca constante do
                  conhecimento e pela resolução criativa de problemas, sempre
                  buscando os melhores padrões e práticas da indústria. Se você
                  está procurando um profissional que não apenas entregue
                  resultados, mas os eleve a um novo patamar, estou pronto para
                  colaborar em seu próximo projeto. Vamos construir algo
                  extraordinário juntos
                </span>
              </div>
              <div className={styles.lottie_content}>
                <Lottie
                  options={defaultOptions}
                  height={800}
                  width={800}
                  isStopped={false}
                  isPaused={false}
                />
              </div>
            </div>
          </section>
        </Element>
        <Element name={'skills'} className={'element'} id={'skills'}>
          <section
            className={styles.section}
            ref={sectionRefs[1]}
            id={'skills'}
          >
            <span>
              Desde 2018 atuando como Engenheiro de Software e desenvolvedor web
              Full Stack essas são minhas sikills:
            </span>
            <div className={styles.skills_icons_container}>
              <div className={styles.skills_icons}>
                {iconsSkills.map((icon) => (
                  <div className={styles.skill_icon} key={icon.id}>
                    {icon.Icon && icon.Icon(iconColor, `${styles.icon}`)}
                    <span>{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Element>
        <Element name={'works'} className={'element'} id={'works'}>
          <section className={styles.section} ref={sectionRefs[2]} id={'works'}>
            Meus Trabalhos:
            <div>
              {works.map((work) => (
                <div key={work.id}>
                  <span>{work.name}</span>
                </div>
              ))}
            </div>
          </section>
        </Element>
        <Element name={'contact'} className={'element'} id={'contact'}>
          <section
            className={styles.section}
            ref={sectionRefs[3]}
            id={'contact'}
          >
            Contato:
            <div>
              <Image
                src={'/images/icons/email.svg'}
                alt={'Email'}
                width={50}
                height={50}
              />
              <Image
                src={'/images/icons/whatsapp.svg'}
                alt={'Whatsapp'}
                width={50}
                height={50}
              />
              <Image
                src={'/images/icons/linkedin.svg'}
                alt={'Linkedin'}
                width={50}
                height={50}
              />
            </div>
          </section>
        </Element>
      </div>
    </main>
  )
}
