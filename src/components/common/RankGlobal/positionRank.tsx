import { Avatar, Flex, Text } from "@chakra-ui/react";

export function PositionRank() {
  return (
    <Flex
          justifyContent="space-between"
        >
          <Flex align="center" gap="2">
            <Text color="gray.50" fontSize="small">1º</Text>
            <Avatar size="sm" name="Gabriel Gxguinho" src="https://github.com/gabrielapl.png" />
            <Text color="gray.50" fontSize="small">Gabriel</Text>
          </Flex>
          <Flex align="center" gap="2">
            <Text color="gray.50" fontSize="small">200 XP</Text>
          </Flex>
        </Flex>
  )
}