import * as React from 'react'
import { useState } from 'react';
import { Pressable, Keyboard} from 'react-native';
import{
    Icon,
    VStack,
    useColorModeValue,
}from 'native-base'
import {AntDesign} from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box';
import ThemeToggle from '../components/theme-toggle';
import shortid from 'shortid';
import Tasklist from '../components/task-list';
import { Fab } from 'native-base';
import Masthead from '../components/masthead'
import Navbar from '../components/navbar';

const initialData= [ 
    {
        id:shortid.generate(),
        subject: 'Buy Roosh food',
        done: false
    },
    {
        id: shortid.generate(),
        subject: 'Learn about RNN for Sequence Labeling in NLP',
        done: false
    },
    {
        id: shortid.generate(),
        subject: 'Fill in Electives form',
        done: false
    }
]

export default function MainScreen(){
    //to enable the checkbox to be ticked.
    const[data,setData]= useState(initialData)
    const[editingItemId, setEditingItemId] = useState<string | null> (null)
    const handleToggleTaskItem = React.useCallback(item=>{
        setData(prevData => {
            const newData = [... prevData]
            const index = prevData.indexOf(item)
            newData[index]= {
                ...item,
                done: !item.done
            }
            return newData
        })
    },[])

    const handleChangeTaskItemSubject = React.useCallback((item, newSubject)=>{
        setData(prevData => {
            const newData = [... prevData]
            const index = prevData.indexOf(item)
            newData[index]= {
                ...item,
                subject: newSubject
            }
            return newData
        })
    },[])

    const handleFinishEditingTaskItem = React.useCallback(_item => {
        setEditingItemId(null)


    },[])
    
    const handlePressTaskItemLabel = React.useCallback(item =>{
        setEditingItemId(item.id)

    },[])

    const handleRemoveItem = React.useCallback(item => {
        setData(prevData => {
            const newData= prevData.filter(i => i !== item)
            return newData
        })
    },[])

    const handleScreenPress = () => {
        Keyboard.dismiss(); // Dismiss the keyboard when screen is pressed
    };

    return (
        //here we define the color for the dark and light mode
        //we set background color to red if light mode and yellow for dark mode
        
        
            <AnimatedColorBox flex={1}  bg={useColorModeValue('warmGray.50','primary.900')}w="full">
                <Masthead
                title="What's up Sid!"
                image = {require('../assets/masthead.png')}>
                    <Navbar/>
                </Masthead>
            <VStack space={5} alignItems="center" w="full">
                <Tasklist
                    data={data}
                    onToggleItem={handleToggleTaskItem}
                    onChangeSubject={handleChangeTaskItemSubject}
                    onFinishEditing={handleFinishEditingTaskItem}
                    onPressLabel={handlePressTaskItemLabel}
                    onRemoveItem={handleRemoveItem}
                    editingItemId={editingItemId}
                />
                <ThemeToggle></ThemeToggle>
            </VStack>
            <Fab
            position = "absolute"
            renderInPortal ={false}
            size = "sm"
            icon ={<Icon
            color = "white"
            as={<AntDesign name="plus"/>}
            />}
            colorScheme={useColorModeValue('red','yellow')}
            bg={useColorModeValue('red.500','yellow.500')}
            onPress={()=>{
                const id = shortid.generate()
                setData([
                    {
                        id,
                        subject: '',
                        done:false
                    },
                    ...data
                ])
                setEditingItemId(id)
            }}
            />
            </AnimatedColorBox>
        
    )
}