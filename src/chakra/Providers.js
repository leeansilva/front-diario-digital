'use client'
// import '@fontsource-variable/open-sans';
// import '@fontsource-variable/nunito';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }) {
  return (
    <CacheProvider>
		<ChakraProvider>
			{children}
		</ChakraProvider>
    </CacheProvider>
  )
}