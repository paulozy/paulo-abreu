import { HeaderContainer } from './styles'

import avatar from '../../assets/avatar.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={avatar} alt="Paulo Abreu avatar" />
      <span>Paulo Abreu</span>
    </HeaderContainer>
  )
}
