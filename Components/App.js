import React, {Component} from "react";
import {Text,View,Navigator} from "react-native";
import ChiTiet from "../Components/ChiTiet.js";
import DanhSach from "../Components/DanhSach.js";

export default class App extends Component{
    renderScene(route, navigator){
        switch (route.name) {
            case "danhsach": return(<DanhSach/>);
                                
            case "chitiet": return(<ChiTiet/>);
                
        }
    }
    render(){
        return(
           <Navigator
                initialRoute={{name: "danhsach"}}
                renderScene={this.renderScene}
           />
        );
    }
} 