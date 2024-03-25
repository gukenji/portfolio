import portfolio_cover from '../assets/portfolio-cover.gif'
import loading from '../assets/loading.gif'
import mui from '../assets/mui.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import tailwind from '../assets/tailwind.svg'
import threejs from '../assets/threejs.svg'
import python from '../assets/python.svg'
import django from '../assets/django.svg'
import raspberry from '../assets/raspberry.svg'
import postgresql from '../assets/postgresql.svg'
import vite from '../assets/vite.svg'
import typescript from '../assets/typescript.svg'

export const items = [
  //imagens 302x600
  {
    title: '_porfólio pessoal ',
    css: `url(${portfolio_cover})`,
    content: (
      <>
        Portfólio pessoal com o propósito de expor meus outros projetos.
        <br /> Há diversos outros códigos em meu Github, entre eles códigos de cursos e treinamentos, porém aqui estarão
        apenas os que pretendo realizar deploy em produção.
      </>
    ),
    icons: [{ react: react }, { redux: redux }, { tailwind: tailwind }, { 'three.js': threejs }],
    git_link: 'https://github.com/gukenji/portfolio'
  },
  {
    title: '_fitwars',
    css: `url(${loading})`,
    content: (
      <>
        Projeto com o intuito de facilitar o controle do consumo de macronutrientes no dia-a-dia, de uma maneira
        interativa. <br />O app contará com elementos MMORPG (inspirado em Ultima Online e The Crims), fazendo com que
        os usuários contribuam (através da criação de grupos) e/ou batalhem entre si.
      </>
    ),
    icons: [
      { react: react },
      { vite: vite },
      { typescript: typescript },
      { redux: redux },
      { python: python },
      { django: django },
      { postgresql: postgresql }
    ],
    git_link: 'https://github.com/gukenji/comer-bem'
  },

  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  },
  {
    title: '_',
    css: `url(${loading})`
  }
]
