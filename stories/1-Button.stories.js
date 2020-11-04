import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Messages } from '../components/icons'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => (
  <NavigationButton>
    <Messages />
    <TitleBold>Messages</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
