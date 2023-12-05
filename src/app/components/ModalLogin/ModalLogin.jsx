'use client'
import { UserContext, useUser } from '@/app/contexts/UserContext';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ModalLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user,login } = React.useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleSubbmit = ()=>{
    login(username,password)
    onClose()
  }
  return (
    <>
      <Button onClick={onOpen}>Iniciar sesión</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingresa los datos correspondientes.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input ref={initialRef} onChange={(e) => setUsername(e.target.value)} value={username} placeholder='hansolo' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='12345' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubbmit} colorScheme='blue' mr={3}>
              Iniciar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
