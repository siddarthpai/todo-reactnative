import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainScreen from './screens/main'
import AboutScreen from "./screens/about"
import SettingScreen from './screens/setting'

const Drawer = createDrawerNavigator()
const App = ()=>
{
    return(
        <Drawer.Navigator initialRouteName='Main' screenOptions={{
            headerShown: false,
            drawerType: 'back',
            overlayColor: '#00000000'
        }}>
            <Drawer.Screen name="Main" component={MainScreen}></Drawer.Screen>
            <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
            <Drawer.Screen name="Settings" component={SettingScreen}/>
        </Drawer.Navigator>
    )

}

export default App