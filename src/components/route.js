import React, { Component } from "react";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
 import Login from './login'
 import Home from './home'

const MainNav = createStackNavigator(
    {
        Login:{
            screen: Login,
           
        },
        Home:{
            screen:Home,
            
        },
    }
)

export default Router = createAppContainer(MainNav)