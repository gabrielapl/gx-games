import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { QuizOptions } from "../../../interfaces/games";
import { QuizCard } from "./QuizCard";

interface RowQuizProps {
  data: QuizOptions;
}

export function RowQuiz({ data }: RowQuizProps) {
  return (
    <Box
      w="100%"
      mb="8"
    >
      <Heading mb="8" fontSize="x-large" >{data.type}</Heading>
      <Flex gap="6">

        {
          data.quizs.map(quiz => (
            <QuizCard key={quiz.id} data={quiz} />
          ))
        }

      </Flex>
    </Box>

  )
}