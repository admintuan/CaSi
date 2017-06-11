import React, {Component} from "react";
import {Text,
        View,
        TouchableOpacity
} from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <Text>Home</Text>
                <TouchableOpacity style={{backgroundColor:'green'}}
                    onPress={()=>{this.props.navigation.navigate('ManHinh_Detail', {thamso:'Hello Tuan'})}}
                >
                    <Text style={{color:'#fff', fontSize:20, padding:10}}> Go to Back
                    </Text>    
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'red'}}
                    onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}
                >
                    <Text style={{color:'#fff', fontSize:20, padding:10}}> Go to Menu
                    </Text>    
                </TouchableOpacity>
            </View>
        );
    }
} 