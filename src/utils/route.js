import React, { Component } from "react";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
 import Login from '../components/login'
 import Home from '../components/home'
 import NovoProblema from '../components/novoProblema'
 import Historico from '../components/historico'
 import Perfil from '../components/perfil'

const MainNav = createStackNavigator(
    {
        Login:{
            screen: Login,
        },
        Home:{
            screen:Home,
            title:"Home",
            defaultNavigationOptions: {
                title: 'Home',
              }
        },
        NovoProblema:{
            screen:NovoProblema,
            title:"Criando novo problema",
            defaultNavigationOptions: {
                title:"Criando novo problema",
              }
        },
        Historico:{
            screen:Historico,
            title:"Historico de problemas",
            defaultNavigationOptions: {
                title:"Historico de problemas",
              }
        },
        Perfil:{
            screen:Perfil,
            title:"Perfil",
            defaultNavigationOptions: {
                title: 'Perfil',
              }
        },
    }
)

export default Router = createAppContainer(MainNav)