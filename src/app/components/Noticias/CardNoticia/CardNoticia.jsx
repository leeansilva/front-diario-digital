'use client'
import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FiHeart, FiChat, FiShare, FiBookOpen } from 'react-icons/fi'
import Link from 'next/link'

export default function CardNoticia({ data }) {
  return (
    <VStack
      mt={5}
      mb={5}
    >

      {
        data != null &&
        data.map((noticia, index) => (
          <Card
            _hover={{
              boxShadow: 'xl',
            }}
            direction={{ base: 'column', md: 'column', lg: 'row' }}
            overflow='hidden'
            variant='outline'
            key={index}
            width={{ base: '100%', md: '100%', lg: '120%' }}
          >
            <Image
              objectFit='cover'
              maxW={{ base: '200px', sm: '100%', lg: '200px' }}
              // maxH={{ base: '200px', md: '100%' }}
              src={noticia.imagen}
              alt='Caffe Latte'
            />

            <Stack w={'100%'}>
              <CardBody>
                <Text as='b' mb={16} fontSize='2xl'  >
                  {noticia.titulo}
                </Text>

                {JSON.parse(noticia.componentes).length > 0 && (
                  <Text mt={5} mb={5} fontSize='xl'>
                    {JSON.parse(noticia.componentes)[0]['subtitulo']}.
                  </Text>
                )}

                <Text mb={5} mt={5} fontSize={'sm'}>{noticia.fuente}</Text>


              </CardBody>
              <CardFooter gap={25}>

                <Button colorScheme={'red'} flex='1' variant='outline' rightIcon={<FiHeart></FiHeart>} >Me gusta</Button>
                <Button as={Link} href={"routes/"+noticia.id} colorScheme={'green'} flex='1' variant='outline' rightIcon={<FiBookOpen></FiBookOpen>} > Leer
                </Button>


              </CardFooter>

            </Stack>

          </Card>
        ))
      }
    </VStack>
  )
}
