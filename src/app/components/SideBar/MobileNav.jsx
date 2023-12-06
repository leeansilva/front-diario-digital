'use client'
import { useUser } from '@/app/contexts/UserContext';
import { Avatar, Box, Button, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'
import ModalLogin from '../ModalLogin/ModalLogin';
import Link from 'next/link';
import NextLink from 'next/link'

export default function MobileNav({ onOpen }) {

  const { user, logout } = useUser();

  return (
    <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 4 }} height="20" alignItems="center" bg={'white'} borderBottomWidth="1px" borderBottomColor={'gray.200'} justifyContent={{ base: 'space-between', md: 'flex-end' }} >
      <IconButton display={{ base: 'flex', md: 'none' }} onClick={onOpen} variant="outline" aria-label="open menu" icon={<FiMenu />} />
      {/* <h1>
      Notificaciones
    </h1>
    <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} /> */}

      <HStack spacing={{ base: '0', md: '6' }}>
        {
          user?.disabled === 'false' &&
          <Button as={NextLink} href='/routes/CrearNoticia' >Crear Noticia</Button>
        }
        <Flex alignItems={'center'}>
          {
            user !== null ?
              <Menu>
                <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                  <HStack>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                    <VStack
                      display={{ base: 'none', md: 'flex' }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2">
                      <h1>{user.nombre}</h1>
                    </VStack>
                  </HStack>
                </MenuButton>

                <MenuList
                  bg={'gray.900'}
                  borderColor={'gray.700'}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
                </MenuList>
              </Menu>
              :
              <ModalLogin />
          }

        </Flex>
      </HStack>
    </Flex>
  )
}
