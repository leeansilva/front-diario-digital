'use client'
import { Box, Drawer, DrawerContent } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import React from "react";
import SideBarContent from "./SideBarContent";
import MobileNav from "./MobileNav";

export default function SideBarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
      <SideBarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
            <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />

    </>
  );
}
