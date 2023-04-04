import {
    Flex, Text
} from '@chakra-ui/react'

function Layout({children}){
    return(
        <>
            <Flex
                padding='4'
                sx={{position:'sticky', top:'0'}}
                backgroundColor='green.700'
                color='gray.50'
                >
                <Text as='b' fontSize='xl'>
                    My Books
                </Text>
            </Flex>
            {children}
        </>
    )
}

export default Layout;