/**
 * Skills Icons
 *
 * @author Matheus Rodrigues <matheus.rodrigues@kepha.com.br>
 */

import {
  IconAngularJs,
  IconAws,
  IconAzure,
  IconDocker,
  IconFlask,
  IconGit,
  IconJava,
  IconJavascript,
  IconKubernetes,
  IconLaravel,
  IconNextJs,
  IconNodeJs,
  IconPhp,
  IconPython,
  IconQuarkus,
  IconReactJs,
  IconSpringBoot,
  IconTypescript,
} from './icons'

interface IconSkill {
  id: number
  name: string
  url: string
  Icon?: (color: string, className: string) => JSX.Element
  alt: string
}

export const iconsSkills: IconSkill[] = [
  {
    id: Math.random(),
    name: 'Nextjs',
    url: 'https://nextjs.org/',
    Icon: (color, className) => (
      <IconNextJs
        className={className}
        color={color}
        area-label={'Icon Nextjs'}
      />
    ),
    alt: 'Nextjs',
  },
  {
    id: Math.random(),
    name: 'Reactjs',
    url: 'https://pt-br.legacy.reactjs.org/',
    Icon: (color, className) => (
      <IconReactJs
        className={className}
        color={color}
        area-label={'Icon Reactjs'}
      />
    ),
    alt: 'Reactjs',
  },
  {
    id: Math.random(),
    name: 'SpringBoot',
    url: 'https://spring.io/projects/spring-boot',
    Icon: (color, className) => (
      <IconSpringBoot
        className={className}
        color={color}
        area-label={'Icon SpringBoot'}
      />
    ),
    alt: 'SpringBoot',
  },
  {
    id: Math.random(),
    name: 'Flask',
    url: 'https://flask.palletsprojects.com/en/latest/',
    Icon: (color, className) => (
      <IconFlask
        className={className}
        color={color}
        area-label={'Icon Flask'}
      />
    ),
    alt: 'Flask',
  },
  {
    id: Math.random(),
    name: 'Quarkus',
    url: 'https://pt.quarkus.io/',
    Icon: (color, className) => (
      <IconQuarkus
        className={className}
        color={color}
        area-label={'Icon Quarkus'}
      />
    ),
    alt: 'Quarkus',
  },
  {
    id: Math.random(),
    name: 'NodeJs',
    url: 'https://nodejs.org/en',
    Icon: (color, className) => (
      <IconNodeJs
        className={className}
        color={color}
        area-label={'Icon NodeJs'}
      />
    ),
    alt: 'NodeJs',
  },
  {
    id: Math.random(),
    name: 'AngularJs',
    url: 'https://angularjs.org/',
    Icon: (color, className) => (
      <IconAngularJs
        className={className}
        color={color}
        area-label={'Icon AngularJs'}
      />
    ),
    alt: 'AngularJs',
  },
  {
    id: Math.random(),
    name: 'Laravel',
    url: 'https://laravel.com/',
    Icon: (color, className) => (
      <IconLaravel
        className={className}
        color={color}
        area-label={'Icon Laravel'}
      />
    ),
    alt: 'Laravel',
  },
  {
    id: Math.random(),
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
    Icon: (color, className) => (
      <IconTypescript
        className={className}
        color={color}
        area-label={'Icon Typescript'}
      />
    ),
    alt: 'Typescript',
  },
  {
    id: Math.random(),
    name: 'Javascript',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    Icon: (color, className) => (
      <IconJavascript
        className={className}
        color={color}
        area-label={'Icon Javascript'}
      />
    ),
    alt: 'Javascript',
  },
  {
    id: Math.random(),
    name: 'Java',
    url: 'https://www.java.com/en/',
    Icon: (color, className) => (
      <IconJava className={className} color={color} area-label={'Icon Java'} />
    ),
    alt: 'Java',
  },
  {
    id: Math.random(),
    name: 'Python',
    url: 'https://www.python.org/',
    Icon: (color, className) => (
      <IconPython
        className={className}
        color={color}
        area-label={'Icon Python'}
      />
    ),
    alt: 'Python',
  },
  {
    id: Math.random(),
    name: 'PHP',
    url: 'https://www.php.net/',
    Icon: (color, className) => (
      <IconPhp className={className} color={color} area-label={'Icon PHP'} />
    ),
    alt: 'PHP',
  },
  {
    id: Math.random(),
    name: 'Docker',
    url: 'https://www.docker.com/',
    Icon: (color, className) => (
      <IconDocker
        className={className}
        color={color}
        area-label={'Icon Docker'}
      />
    ),
    alt: 'Docker',
  },
  {
    id: Math.random(),
    name: 'Kubernetes',
    url: 'https://kubernetes.io/',
    Icon: (color, className) => (
      <IconKubernetes
        className={className}
        color={color}
        area-label={'Icon Kubernetes'}
      />
    ),
    alt: 'Kubernetes',
  },
  {
    id: Math.random(),
    name: 'Azure',
    url: 'https://azure.microsoft.com/pt-br/products/devops',
    Icon: (color, className) => (
      <IconAzure
        className={className}
        color={color}
        area-label={'Icon Azure'}
      />
    ),
    alt: 'Azure',
  },
  {
    id: Math.random(),
    name: 'AWS',
    url: 'https://aws.amazon.com/?nc2=h_lg',
    Icon: (color, className) => (
      <IconAws className={className} color={color} area-label={'Icon AWS'} />
    ),
    alt: 'AWS',
  },
  {
    id: Math.random(),
    name: 'Git',
    url: 'https://git-scm.com/',
    Icon: (color, className) => (
      <IconGit className={className} color={color} area-label={'Icon Git'} />
    ),
    alt: 'Git',
  },
]
