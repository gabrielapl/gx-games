import { Avatar, Box, Flex, Heading, List, Text } from "@chakra-ui/react";
import { PositionRank } from "./positionRank";

export function RankGlobal() {
  return (
    <Box
      bg='purple.900'
      w='xs'
      borderRadius="18"
      px="8"
      py="5"
    >
      <Heading size="md" mb="4">Rank Global...</Heading>
      <List spacing={4} >
        <PositionRank />
        <PositionRank />
        <PositionRank />
      </List>

    </Box>
  )
}