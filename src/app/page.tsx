'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { iconsSkills } from '@/utils/icons'
import { works } from '@/utils/works'
import { Element } from 'react-scroll'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Element name={'home'} className={'element'} id={'home'}>
          <section className={styles.section}>
            <div>
              <h1>Matheus Rodrigues</h1>
              <span>Engenheiro de Software</span>
              <span>
                Sou um engenheiro de software apaixonado pela arte de
                transformar ideias em realidade digital. Com uma sólida formação
                e anos de experiência como desenvolvedor full stack, trago um
                compromisso inabalável com a excelência técnica e a inovação.
                Meu trabalho vai além de simplesmente escrever linhas de código;
                é sobre criar soluções robustas e elegantes que impulsionam a
                experiência do usuário e fazem a diferença no mundo digital. Sou
                motivado pela busca constante do conhecimento e pela resolução
                criativa de problemas, sempre buscando os melhores padrões e
                práticas da indústria. Se você está procurando um profissional
                que não apenas entregue resultados, mas os eleve a um novo
                patamar, estou pronto para colaborar em seu próximo projeto.
                Vamos construir algo extraordinário juntos
              </span>
            </div>
          </section>
        </Element>
        <Element name={'skills'} className={'element'} id={'skills'}>
          <section className={styles.section}>
            <span>
              Desde 2018 atuando como Engenheiro de Software e desenvolvedor web
              Full Stack essas são minhas sikills:{' '}
            </span>
            <div className={styles.skills_icons_container}>
              <div className={styles.skills_icons}>
                {iconsSkills.map((icon) => (
                  <div className={styles.iconSkill} key={icon.id}>
                    <Image
                      width={70}
                      height={70}
                      className={styles.icon}
                      src={icon.src}
                      alt={icon.alt}
                      draggable={false}
                    />
                    <span>{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Element>
        <Element name={'works'} className={'element'} id={'works'}>
          <section className={styles.section}>
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
          <section className={styles.section}>
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
