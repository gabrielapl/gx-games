import { Box, Button, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ProgressBar } from "../ProgressBar";
import { FiArrowRight } from 'react-icons/fi';

export function QuizCard() {
  return (
    <Flex
      w="100%"
      maxW={500}
      height="28"
      borderRadius="18"
      bg="purple.900"
      p="2"
      align="center"
      pl="8"
      pr="6"
      justifyContent="space-between"
    >
      
      <VStack w="80%" align="start">
        <Text>Programação Quiz 1</Text>
        <Text>Etapa: 2/10</Text>
        <ProgressBar />
      </VStack>

      <IconButton aria-label='go to Quiz' bg="gray.100" icon={<FiArrowRight />} />
    </Flex>
  )
}