"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { iconsSkills } from "@/utils/icons-skills";
import { works } from "@/utils/works";
import { Element, scroller } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import { ActionsContext } from "@/context/ActionsContext";
import Typewriter from "typewriter-effect";

import "animate.css";
import Link from "next/link";

export default function Home() {
  const { sectionRefs, visibleSectionIndex } = useContext(ActionsContext);
  const [iconColor, setIconColor] = useState<string>("#FFFFFF");
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const defaultColor = "#5c10f4";

  const handleMouseEnter = (iconId: number) => {
    setHoveredIcon(iconId);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  useEffect(() => {
    console.log(visibleSectionIndex);
  }, [visibleSectionIndex]);

  return (
    <main className={styles.main}>
      <div className={styles.top_content}></div>
      <div className={styles.content}>
        <Element name={"home"} className={"element"} id={"home"}>
          <section className={styles.section} ref={sectionRefs[0]} id={"home"}>
            <div className={styles.home_content}>
              <span className={styles.span}>Hey, I`m</span>
              <h1 className={styles.h1}>Matheus Rodrigues</h1>
              <div className={styles.p}>
                <Typewriter
                  options={{
                    strings: [
                      "I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've managed to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.",
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 20,
                    deleteSpeed: Infinity,
                  }}
                />
              </div>
            </div>
          </section>
        </Element>
        <Element name={"skills"} className={"element"} id={"skills"}>
          <section
            className={styles.section}
            ref={sectionRefs[1]}
            id={"skills"}
          >
            <div className={styles.skills_content}>
              {/* <span className={`${styles.bio}`}>
                Desde 2018 atuando como Engenheiro de Software e desenvolvedor
                web Full Stack essas são minhas sikills:
              </span> */}
              <div className={styles.skills_icons_container}>
                <div className={styles.skills_icons_card}>
                  {iconsSkills.map((icon) => (
                    <Link key={icon.id} href={icon.url} target={"_blank"}>
                      <div
                        className={styles.skill_icon}
                        onMouseEnter={() => handleMouseEnter(icon.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {icon.Icon &&
                          icon.Icon(
                            hoveredIcon === icon.id ? defaultColor : iconColor,
                            `${styles.icon}`
                          )}
                        <span
                          style={{
                            color:
                              hoveredIcon === icon.id
                                ? defaultColor
                                : iconColor,
                          }}
                          className={styles.skill_name}
                        >
                          {icon.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* <span className={`${styles.bio}`}>
                " Sou um engenheiro de software com uma sólida formação e anos
                de experiência como desenvolvedor full stack, trago um
                compromisso inabalável com a excelência técnica e a inovação.
                Meu trabalho vai além de simplesmente escrever linhas de código;
                é sobre criar soluções robustas e elegantes que impulsionam a
                experiência do usuário e fazem a diferença no mundo digital. Sou
                motivado pela busca constante do conhecimento e pela resolução
                criativa de problemas, sempre buscando os melhores padrões e
                práticas da indústria. Se você está procurando um profissional
                que não apenas entregue resultados, mas os eleve a um novo
                patamar, estou pronto para colaborar em seu próximo projeto.
                Vamos construir algo extraordinário juntos?! "
              </span> */}
            </div>
          </section>
        </Element>
        <Element name={"works"} className={"element"} id={"works"}>
          <section className={styles.section} ref={sectionRefs[2]} id={"works"}>
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
        <Element name={"contact"} className={"element"} id={"contact"}>
          <section
            className={styles.section}
            ref={sectionRefs[3]}
            id={"contact"}
          >
            Contato:
            <div>
              <Image
                src={"/images/icons/email.svg"}
                alt={"Email"}
                width={50}
                height={50}
              />
              <Image
                src={"/images/icons/whatsapp.svg"}
                alt={"Whatsapp"}
                width={50}
                height={50}
              />
              <Image
                src={"/images/icons/linkedin.svg"}
                alt={"Linkedin"}
                width={50}
                height={50}
              />
            </div>
          </section>
        </Element>
      </div>
    </main>
  );
}
