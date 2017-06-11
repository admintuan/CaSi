import React from 'react';
import {StackNavigator,TabNavigator, DrawerNavigator} from 'react-navigation';

import Detail from './screens/Detail';
import Menu from './screens/Menu';
import User from './screens/User';
import Home from './screens/Home';

export const HomeStack= StackNavigator({
    ManHinh_Home:{
        screen: Home,
        navigationOptions:{
            title:'Trang Chủ'
        }
    },
    ManHinh_Detail:{
        screen: Detail,
                navigationOptions:{
            title:'Chi Tiết'
        }
    }
})
export const UserStack=StackNavigator({
    ManHinh_User:{
        screen: User,
        navigationOptions:{title:'User'}
    }   
})

export const Tabbar=TabNavigator({
    HOME:{
        screen: HomeStack,
        navigationOptions:{
            tabBarLabel:'HOME'
        }
    },
    USER:{
        screen: UserStack,
        navigationOptions:{
            tabBarLabel:'USER'
        }
    }
},
    {tabBarPosition:'bottom',
    swipeEnabled: true,
    tabBarOptions:{
        style:{backgroundColor:'blue'},
        activeTintColor:'red',
        inactiveTintColor :'#FFF'
    }
})
export const SideMenu=DrawerNavigator({
    Menu:{
        screen:Tabbar
    }
},
    {
        drawerWidth: 200,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
)
