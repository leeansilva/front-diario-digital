import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function TopNoticias() {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}
