"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { iconsSkills } from "@/utils/icons-skills";
import { works } from "@/utils/works";
import { useContext, useLayoutEffect, useState } from "react";
import { ActionsContext } from "@/context/ActionsContext";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Button from "./components/button/Button";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Home() {
  const { sectionRefs, visibleSectionIndex } = useContext(ActionsContext);
  const [iconColor, setIconColor] = useState<string>("#FFFFFF");
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [startTyping, setStartTyping] = useState(false);
  const defaultColor = "#5c10f4";

  const handleMouseEnter = (iconId: number) => {
    setHoveredIcon(iconId);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setStartTyping(true);
    }, 1000);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <section
          className={`${styles.section} home home_content`}
          ref={sectionRefs[0]}
          id={"home"}
        >
          <div className={`${styles.home_content}`}>
            <span className={`${styles.span} span  `}>Hey, I`m</span>
            <h1 className={`${styles.h1} h1 `}>Matheus Rodrigues</h1>
            <div className={`${styles.p} p `}>
              {startTyping && (
                <Typewriter
                  options={{
                    strings: [
                      "I'm a software engineer based in Formosa, Brazil, I enjoy creating things that live on the internet, whether that's websites, apps or anything in between. I've been freelancing for four years while studying at university and have managed to gain a fair amount of experience and valuable knowledge from all sorts of fields throughout my projects/work.",
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 1.5,
                    deleteSpeed: Infinity,
                  }}
                />
              )}
            </div>
            <div className={styles.btns}>
            <Button width={'3rem'} icon={<FaWhatsapp />} href={'https://wa.me/+5561998896788'}/>
            <Button width={'3rem'} icon={<HiOutlineMail />} href={'mailto:matheus.rodrigues.esoft@gmail.com'}/>
            <Button width={'3rem'} icon={<FaLinkedin />} href={'https://www.linkedin.com/in/matheus-rodrigues-in/'}/>
            <Button width={'3rem'} icon={<AiOutlineGithub />} href={'https://github.com/MatheusRodriguesEsoft'}/>
            </div>
           
          </div>
        </section>
        <section
          className={`${styles.section} skills skills_content`}
          ref={sectionRefs[1]}
          id={"skills"}
        >
          <div className={`${styles.skills_content} `}>
            <div className={styles.skills_icons_container}>
              <div className={styles.skills_icons_card}>
                {iconsSkills.map((icon) => (
                  <Link key={icon.id} href={icon.url} target={"_blank"}>
                    <div
                      className={`${styles.skill_icon} skill_item`}
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
                            hoveredIcon === icon.id ? defaultColor : iconColor,
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
          </div>
        </section>
        <section
          className={`${styles.section} works works_content`}
          ref={sectionRefs[2]}
          id={"works"}
        >
          Meus Trabalhos:
          <div>
            {works.map((work) => (
              <div key={work.id}>
                <span>{work.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section} ref={sectionRefs[3]} id={"contact"}>
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
      </div>
    </main>
  );
}
