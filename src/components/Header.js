import React from 'react'
import { useDispatch } from 'react-redux'
import { changePage } from '../reducer/pageState'
import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'

const Header = () => {
  const currentPage = useSelector((state) => state.page.value)
  const dispatch = useDispatch()

  return (
    <div className="fixed z-10 top-pad bottom-pad left-pad right-pad text-white p-10 ">
      <div className="">
        <h1 className="font-h1 text-2xl md:text-5xl mb-1">Gustavo Takahashi</h1>
        <p className="font-h1 md:text-lg mt-2">Desenvolvedor & Engenheiro</p>
      </div>
      <div className="flex">
        <ul className="pt-12 pl-0 list-none flex flex-col gap-2 font-area text-xs md:text-base">
          <li className="cursor-pointer hover:text-[#bfbfbf]" onClick={() => dispatch(changePage('home'))}>
            {(currentPage !== 'home') & (currentPage !== null) ? (
              'Home'
            ) : (
              <span className="material-symbols-outlined text-xs md:text-base">arrow_forward_ios</span>
            )}
          </li>
          <li
            className="cursor-pointer hover:text-[#bfbfbf] md:text-base"
            onClick={() => dispatch(changePage('projetos'))}>
            {currentPage !== 'projetos' ? (
              'Projetos'
            ) : (
              <span className="material-symbols-outlined text-xs md:text-base">arrow_forward_ios</span>
            )}
          </li>
          <li
            className="cursor-pointer hover:text-[#bfbfbf] md:text-base"
            onClick={() => {
              dispatch(changePage('contatos'))
            }}>
            {currentPage !== 'contatos' ? (
              'Contatos'
            ) : (
              <span className="material-symbols-outlined text-xs md:text-base">arrow_forward_ios</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
