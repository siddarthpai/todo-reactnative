import * as React from 'react'
import { Pressable } from 'react-native';
import{
    Text,
    Box,
    Center,
    VStack,
    useColorModeValue,
}from 'native-base'
import ThemeToggle from '../components/theme-toggle';
import AnimatedCheckbox from '../components/animated-checkbox';
import TaskItem from '../components/task-item'

export default function MainScreen(){
    //to enable the checkbox to be ticked.
    const [checked, setChecked] = React.useState(false)
    const handlePressCheckbox = React.useCallback(()=>{
        setChecked(prev => !prev)
    })

    return (
        //here we define the color for the dark and light mode
        //we set background color to red if light mode and yellow for dark mode
        <Center _dark={{bg:'blueGray.900'}} _light={{bg:'blueGray.50'}} px={4} flex={1}>
            <VStack space={5} alignItems="center">
                <Box w="100px" h="100px">  
                    <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox}/>  
                </Box>
                <Box p={10} bg={useColorModeValue('red.500','yellow.500')}>
                    <Text>
                        Hello
                    </Text>
                </Box>
                <ThemeToggle></ThemeToggle>
            </VStack>
        </Center>
    )
}