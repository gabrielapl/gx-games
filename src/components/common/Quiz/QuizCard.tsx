import { Box, Button, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ProgressBar } from "../ProgressBar";
import { FiArrowRight } from 'react-icons/fi';
import { QuizOption } from "../../../interfaces/games";

interface QuizCardProps {
  data: QuizOption;
}

export function QuizCard({ data }: QuizCardProps) {
  return (
    <Flex
      w="100%"
      maxW={500}
      height="28"
      borderRadius="18"
      borderWidth="2px"
      borderColor="purple.900"
      p="2"
      align="center"
      pl="8"
      pr="6"
      justifyContent="space-between"
    >

      <VStack w="80%" align="start">
        <Text>{data.title}</Text>
        <Text>Etapa: {`${data.stepsCurrent} / ${data.stepsTotals}`}</Text>
      </VStack>

      <IconButton
        as="a"
        href={`quiz/${data.id}`}
        aria-label='go to Quiz'
        bg="purple.900"
        colorScheme="purple"
        icon={<FiArrowRight />}
      />
    </Flex>
  )
}