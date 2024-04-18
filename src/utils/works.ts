interface Work {
  id: number
  name: string
  page: string
  img: string
  repo: string
}

export const works: Work[] = [
  {
    id: Math.random(),
    name: 'VideoMentor',
    page: 'http://videomentor.com.br',
    img: '',
    repo: 'https://github.com/MatheusRodriguesEsoft/app-videomentor',
  },
  {
    id: Math.random(),
    name: 'SHE&HE',
    page: 'http://sheandhestore.com.br',
    img: '',
    repo: 'https://github.com/MTheusRodrigues/sheandhe',
  },
  {
    id: Math.random(),
    name: 'MusicDown',
    page: 'https://musicdown.com.br',
    img: '',
    repo: 'https://github.com/MTheusRodrigues/muscidown',
  },
  {
    id: Math.random(),
    name: 'Moveit',
    page: 'https://moveit.com.br',
    img: '',
    repo: 'https://github.com/MTheusRodrigues/Moveit-Premium',
  },
]
