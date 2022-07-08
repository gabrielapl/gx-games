import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { QuizCard } from "./QuizCard";

export function RowQuiz() {
  return (
    <Box
      w="100%"
      mb="8"
    >
      <Heading mb="8" fontSize="x-large" >Programação</Heading>
      <Flex gap="6"> 

        <QuizCard />
        <QuizCard />
        <QuizCard />

      </Flex>
    </Box>

  )
}