'use client'
import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CrearNoticia() {
  const [value, setValue] = useState('');
  return (
    <>
      <Flex pb={'32px'} gap={'20px'} pt={'32px'} width={'80%'} margin={'0 auto'} justifyContent={'center'} flexDirection={'column'} >


        <FormControl>
          <FormLabel>Título</FormLabel>
          <Input placeholder='Título' />
        </FormControl>

        <FormControl>
          <FormLabel>Subtítulo</FormLabel>
          <Input placeholder='Subtítulo' />
        </FormControl>

        <FormControl  >
          <FormLabel>Descripción</FormLabel>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </FormControl>

        <FormControl  >
          <FormLabel>Imágen</FormLabel>
          <Input type='file' placeholder='Imágen' />
        </FormControl>



        <Button >Subir historia</Button>
        <Button>Vista previa</Button>



      </Flex>
    </>
  )
}
