import React, {Component} from "react";
import {View} from "react-native";

import {HomeStack} from './Components/Router';

export default class App extends Component{
     render(){
        return(
            <HomeStack />                      
        );
    }
} 