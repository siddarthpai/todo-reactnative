import React from 'react'
import {Box, Text, VStack} from 'native-base'
import ThemeToggle from '../components/theme-toggle';


const Settings = () => {
    return(
        <VStack flex={1}>
            <Box>
                <Text>About Me:</Text>
                <ThemeToggle/>
            </Box>
        </VStack>
    )
}

export default Settings