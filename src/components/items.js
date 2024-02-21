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
    title: '_comer bem',
    css: `url(${loading})`,
    content: (
      <>
        Projeto gratuito e open source que visa facilitar o controle do consumo dos macronutrientes no dia-a-dia. <br />
        O app será integrado a uma balança e um Raspberry Pi para facilitar o input dos alimentos.
      </>
    ),
    icons: [
      { react: react },
      { vite: vite },
      { typescript: typescript },
      { redux: redux },
      { python: python },
      { django: django },
      { 'raspberry pi': raspberry },
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
