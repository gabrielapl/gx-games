import { Box, Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Animation } from "./Animation";
import { ProgressBar } from "./ProgressBar";

export function FinishedGame() {
  return (
    <Flex alignItems="center" direction="column" >
      <Box w="lg" >
        <Heading>Parabéns por finalizar o Quiz</Heading>
        <Animation />
        <VStack spacing="8" >
          <ProgressBar />
          <Flex direction="column" gap="4" align="center" >
            <Text color="#FF9900" fontSize="xl" >Você ganhou 15 XP</Text>
            <Text>45/100</Text>
          </Flex>
          <Button
            as="a"
            href="/home"
            w="100%"
            h="12"
            colorScheme="purple"
            bg="purple.900"
          >
            Continuar
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}