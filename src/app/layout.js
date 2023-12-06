import { Providers } from "@/chakra/Providers";
import SideBarWithHeader from "./components/SideBar/SideBarWithHeader";
import { UserProvider } from "./contexts/UserContext";
import { Box } from "@chakra-ui/react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <UserProvider>
            <SideBarWithHeader />
            <Box ml={{base:'0px', md:'240px'}}>
              {children}
            </Box>
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
