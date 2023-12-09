import React from 'react'
import { useDispatch } from 'react-redux'
import { changePage } from '../reducer/pageState'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className="fixed z-10 top-pad bottom-pad left-pad right-pad text-white p-10 ">
      <div className="">
        <h1 className="font-h1 text-5xl">Gustavo Takahashi</h1>
        <p className="font-h1 text-lg">Desenvolvedor & Engenheiro</p>
      </div>
      <div>
        <ul className="pt-12 flex flex-col gap-2 font-area">
          <li
            className="cursor-pointer hover:text-[#bfbfbf]"
            onClick={() => dispatch(changePage('home'))}>
            Home
          </li>
          <li
            className="cursor-pointer hover:text-[#bfbfbf]"
            onClick={() => dispatch(changePage('projetos'))}>
            Projetos
          </li>
          <li
            className="cursor-pointer hover:text-[#bfbfbf]"
            onClick={() => dispatch(changePage('contatos'))}>
            Contatos
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
