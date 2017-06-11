import React from 'react';
import {StackNavigator} from 'react-navigation';

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

