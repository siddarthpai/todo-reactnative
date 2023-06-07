//this file is used to create the toggle switch to change the theme of the app
import React from 'react'
import {Text, HStack, Switch, useColorMode} from 'native-base'

//HStack is basically a Row and we want Dark(toggle)Light
//if we used VStack it'd be Dark
//                         (toggle)
//                          Light

//switch is used for the toggle button. we define the switched as checked if the mode is light

//on toggling the switch, we toggle color mode(which is a variable under useColorMode)

export default function ThemeToggle(){
    const {colorMode, toggleColorMode}= useColorMode()
    return(
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch isChecked={colorMode === 'light'} onToggle={toggleColorMode}></Switch>
            <Text>Light</Text>
        </HStack>
    )
}