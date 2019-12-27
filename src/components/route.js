import React, { Component } from "react";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
 import Login from './login'
 import Home from './home'
 import NovoProblema from './home'
 import Historico from './home'

const MainNav = createStackNavigator(
    {
        Login:{
            screen: Login,
        },
        Home:{
            screen:Home,
        },
        NovoProblema:{
            screen:NovoProblema,
        },
        Historico:{
            screen:Historico,
        },
    }
)

export default Router = createAppContainer(MainNav)