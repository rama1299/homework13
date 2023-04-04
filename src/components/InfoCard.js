import { Card, Image, CardBody, Stack, Heading, Text } from '@chakra-ui/react'
import { API_URL, PATH } from '../constants/path'
import {generatePath, Link} from 'react-router-dom'

function InfoCard(props) {
    const {id, title, author, publisher, image} = props;
    
    return(
        <Link to = {generatePath(PATH.detail, {id})}>
        <Card
            maxW='xl'
            p='3'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={`${API_URL}/${image}`}
                alt={title}
                borderRadius='md'
            />

            <Stack>
                <CardBody>
                <Heading mb='3' size='md'>{title}</Heading>
                <Text>
                    {author}
                </Text>
                <Text>{publisher}</Text>
                </CardBody>
            </Stack>
        </Card>
        </Link>
    )
}

export default InfoCard