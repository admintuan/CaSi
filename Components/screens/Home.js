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
            </View>
        );
    }
} 