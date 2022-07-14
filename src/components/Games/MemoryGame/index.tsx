import { Box, Flex } from "@chakra-ui/react";
import { Card } from "./Card";

export function MemoryGame() {
  return (
    <Flex
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="2"
    >
      <Card />
      <Card />
    </Flex>
  )
}