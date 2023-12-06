import React from 'react'

const Header = () => {
  return (
    <div className="fixed z-10 top-pad bottom-pad left-pad right-pad text-white p-10 ">
      <div className="">
        <h1 className="font-h1 text-5xl">Gustavo Takahashi</h1>
        <p className="font-h1 text-lg">Desenvolvedor & Engenheiro</p>
      </div>
      <div>
        <ul className="pt-12 flex flex-col gap-2 font-area">
          <li className="cursor-pointer hover:text-slate-900">Home</li>
          <li className="cursor-pointer">Projetos</li>
          <li className="cursor-pointer">Contatos</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
