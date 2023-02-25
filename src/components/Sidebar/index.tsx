import { SearchBar, SidebarContainer, SidebarContent } from './styles'
// import { FaSearch } from 'react-icons/fa'

import { ChangeEventHandler } from 'react'
import avatar from '../../assets/avatar.png'

interface SidebarProps {
  onSearch: ChangeEventHandler
}

export function Sidebar({ onSearch }: SidebarProps) {
  return (
    <SidebarContainer>
      <SidebarContent>
        <img
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
          alt=""
        />

        <div>
          <img src={avatar} alt="" />
          <strong>Paulo Abreu</strong>
          <span>Desenvolvedor Backend</span>
        </div>

        <footer>
          <a
            href="https://www.linkedin.com/in/paulo-abreu-santana/"
            target="_blank"
            rel="noreferrer"
          >
            Contate-me
          </a>
        </footer>

        <SearchBar>
          <input
            type="text"
            placeholder="Pesquise por repositório"
            onChange={onSearch}
          />
        </SearchBar>
      </SidebarContent>
    </SidebarContainer>
  )
}
