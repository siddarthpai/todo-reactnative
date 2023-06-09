import React,{useCallback} from 'react'
import
{
    Pressable
} from 'react-native'
import {Box,HStack, Text,useTheme,themeTools,useColorModeValue} from "native-base"
import AnimatedCheckbox from './animated-checkbox'
import AnimatedTaskLabel from './animated-task-label'

interface Props{
    isDone: boolean,
    onToggleCheckbox?: ()=> void
}
//defining properties of the task item
const TaskItem = (props:Props) => {
    const {isDone, onToggleCheckbox} = props
    const theme = useTheme()
    const highlightColor = themeTools.getColor(
       theme,
       useColorModeValue('red.500','yellow.400') 
    )
    const boxStroke = themeTools.getColor(
        theme,
        useColorModeValue('muted.300','muted.500')
    )
    const checkmarkColor = themeTools.getColor(
        theme,
        useColorModeValue('white','white')
    )
    const activeTextColor = themeTools.getColor(
        theme,
        useColorModeValue('darkText','lightText')
    )
    const doneTextColor = themeTools.getColor(
        theme,
        useColorModeValue('muted.400','muted.600')
    )

    return(
        //define the background of the task item here
        <HStack alignItems='center' w='full' px={4} py={2} bg={useColorModeValue('warmGray.50','blueGray.900')}>
            <Box width={30} height={30} mr={2}>
                <Pressable onPress={onToggleCheckbox}>
                    <AnimatedCheckbox highlightColor={highlightColor} checkmarkColor={checkmarkColor} boxOutlineColor={boxStroke} checked={isDone}/>
                </Pressable>
            </Box>
            <AnimatedTaskLabel strikethrough={isDone} textColor={activeTextColor} inactiveTextColor={doneTextColor}>Task Item</AnimatedTaskLabel>
        </HStack>
    )
}

export default TaskItem;
