import React, { Component } from "react";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
 import Login from '../components/login'
 import Home from '../components/home'
 import NovoProblema from '../components/novoProblema'
 import Historico from '../components/historico'

const MainNav = createStackNavigator(
    {
        Login:{
            screen: Login,
        },
        Home:{
            screen:Home,
            title:"Home"
        },
        NovoProblema:{
            screen:NovoProblema,
            title:"Criando novo problema"
        },
        Historico:{
            screen:Historico,
            title:"Historico de problemas"
        },
    }
)

export default Router = createAppContainer(MainNav)