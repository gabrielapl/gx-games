import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../common/Header";
import { Sidebar } from "../common/Sidebar";

interface BodyPageProps {
  children: ReactNode;
}

export function BodyPage({ children }: BodyPageProps) {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        {children}
        
      </Flex>
    </Box>
  )
}