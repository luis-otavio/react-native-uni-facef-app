import React from 'react'
import { 
  createSwitchNavigator, 
  createAppContainer, 
   } 
from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Menu from './pages/menu'
import Curso from './pages/curso'
import Facef from './pages/facef'
import Time from './pages/time'


const RootSwitch = createSwitchNavigator({
    Menu: Menu,
    Curso: Curso,
    Facef: Facef,
    Time: Time
}, {
    initialRouteName: 'Menu'
})

export default createAppContainer(RootSwitch)