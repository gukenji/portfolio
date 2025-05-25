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
import openai from '../assets/openai.svg'
import fastapi from '../assets/FastAPI.svg'
import docker from '../assets/docker.svg'
import translator_cover from '../assets/translator-cover.gif'
import vue from '../assets/vue.svg'
import microcontroller from '../assets/microcontroller.svg'

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
  // {
  //   title: '_fitwar',
  //   css: `url(${loading})`,
  //   content: (
  //     <>
  //       Projeto com o intuito de facilitar o controle do consumo de macronutrientes no dia-a-dia, de uma maneira
  //       interativa. <br />O app contará com elementos MMORPG (inspirado em Ultima Online e The Crims), fazendo com que
  //       os usuários contribuam (através da criação de grupos) e/ou batalhem entre si.
  //     </>
  //   ),
  //   icons: [
  //     { react: react },
  //     { vite: vite },
  //     { typescript: typescript },
  //     { redux: redux },
  //     { python: python },
  //     { django: django },
  //     { postgresql: postgresql },
  //     { mui: mui }
  //   ],
  //   git_link: 'https://github.com/gukenji/fitwar'
  // },
  {
    title: '_translator',
    css: `url(${translator_cover})`,
    content: (
      <>
        Aplicativo para geração e incorporação de legendas em vídeos através do Whisper AI, com suporte a múltiplos
        idiomas e formatos. Funciona em CPU ou GPU (CUDA) e pode ser acessado por qualquer dispositivo na mesma rede
        Wi-Fi.
      </>
    ),
    icons: [{ react: react }, { whisper: openai }, { python: python }, { fastapi: fastapi }, { docker: docker }],
    git_link: 'https://github.com/gukenji/translator'
  },
  {
    title: '_regador automático de plantas',
    css: `url(${loading})`,
    content: (
      <>
        Sistema de irrigação automática com ESP32, sensores de umidade e controle via Wi-Fi. Possui backend em FastAPI e
        frontend em Vue, permitindo o monitoramento em tempo real da umidade do solo por qualquer dispositivo na mesma
        rede local.
      </>
    ),
    icons: [
      { vue: vue },
      { python: python },
      { fastapi: fastapi },
      { docker: docker },
      { postgresql: postgresql },
      { esp32: microcontroller }
    ],
    git_link: 'https://github.com/gukenji/humidity-reader'
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
