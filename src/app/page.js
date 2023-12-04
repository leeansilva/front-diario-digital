import Image from 'next/image'
import { Box, Button, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <HStack justifyContent={'center'} spacing='24px'>
      <Box w='40px' h='40px' bg='yellow.200'>
        1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
        2
      </Box>
      <Box w='40px' h='40px' bg='pink.100'>
        3
      </Box>
  </HStack>
  )
}
