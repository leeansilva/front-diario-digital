import { Box, Button, CloseButton, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiPenTool } from 'react-icons/fi'
import NavItem from "./NavItem";
import { useUser } from "@/app/contexts/UserContext";
import Link from 'next/link';
import NextLink from 'next/link'

const LinkItems = [
  { name: 'Inicio', icon: FiHome, route: '/' },
  { name: 'Tendencia', icon: FiTrendingUp, route: '/routes/tendencia' },
  { name: 'Explorar', icon: FiCompass, route: 'routes/explorar' },
  { name: 'Favoritos', icon: FiStar, route: 'routes/favoritos' },
  { name: 'Configuración', icon: FiSettings, route: 'routes/configuracion' },
]

export default function SideBarContent({ onClose, ...rest }) {
  const { user, logout } = useUser();
  return (
    <Box
      transition="3s ease"
      bg={"white"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="60" viewBox="0 0 74 60" fill="none">
          <path d="M12.8409 45H2.52841V15.9091H12.9261C15.8523 15.9091 18.3712 16.4915 20.483 17.6562C22.5947 18.8116 24.2188 20.4735 25.3551 22.642C26.5009 24.8106 27.0739 27.4053 27.0739 30.4261C27.0739 33.4564 26.5009 36.0606 25.3551 38.2386C24.2188 40.4167 22.5852 42.0881 20.4545 43.2528C18.3333 44.4176 15.7955 45 12.8409 45ZM8.67898 39.7301H12.5852C14.4034 39.7301 15.9328 39.4081 17.1733 38.7642C18.4233 38.1108 19.3608 37.1023 19.9858 35.7386C20.6203 34.3655 20.9375 32.5947 20.9375 30.4261C20.9375 28.2765 20.6203 26.5199 19.9858 25.1562C19.3608 23.7926 18.428 22.7888 17.1875 22.1449C15.947 21.5009 14.4176 21.179 12.5994 21.179H8.67898V39.7301Z" fill="#0D99FF" />
          <g filter="url(#filter0_d_201_12)">
            <path d="M31.8409 45H21.5284V15.9091H31.9261C34.8523 15.9091 37.3712 16.4915 39.483 17.6562C41.5947 18.8116 43.2188 20.4735 44.3551 22.642C45.5009 24.8106 46.0739 27.4053 46.0739 30.4261C46.0739 33.4564 45.5009 36.0606 44.3551 38.2386C43.2188 40.4167 41.5852 42.0881 39.4545 43.2528C37.3333 44.4176 34.7955 45 31.8409 45ZM27.679 39.7301H31.5852C33.4034 39.7301 34.9328 39.4081 36.1733 38.7642C37.4233 38.1108 38.3608 37.1023 38.9858 35.7386C39.6203 34.3655 39.9375 32.5947 39.9375 30.4261C39.9375 28.2765 39.6203 26.5199 38.9858 25.1562C38.3608 23.7926 37.428 22.7888 36.1875 22.1449C34.947 21.5009 33.4176 21.179 31.5994 21.179H27.679V39.7301Z" fill="#0D99FF" />
          </g>
          <g filter="url(#filter1_d_201_12)">
            <path d="M41.76 45V17H46.68L56.88 33.6L54 33.56L64.32 17H69V45H63.84V34.48C63.84 32.08 63.8933 29.92 64 28C64.1333 26.08 64.3467 24.1733 64.64 22.28L65.28 24L56.6 37.4H53.96L45.56 24.12L46.12 22.28C46.4133 24.0667 46.6133 25.9067 46.72 27.8C46.8533 29.6667 46.92 31.8933 46.92 34.48V45H41.76Z" fill="#0D99FF" />
          </g>
          <defs>
            <filter id="filter0_d_201_12" x="17.5284" y="15.9091" width="32.5455" height="37.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_12" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_12" result="shape" />
            </filter>
            <filter id="filter1_d_201_12" x="37.76" y="17" width="35.24" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_12" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_12" result="shape" />
            </filter>
          </defs>
        </svg>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem as={NextLink} href={link.route} key={link.name} icon={link.icon}>
          <Text fontSize={'xl'}>{link.name}</Text>

        </NavItem>

      ))}
      {
        user?.disabled === 'false' &&
        (

          <NavItem icon={FiPenTool} as={NextLink} href='/routes/CrearNoticia' >Crear Noticia</NavItem>

        )
      }
    </Box>
  );
}
