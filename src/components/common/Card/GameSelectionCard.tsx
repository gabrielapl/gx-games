import { Flex, Text } from "@chakra-ui/react";
import { GamesOptions } from "../../../interfaces/games";

interface GameSelectionCardProps {
  game: GamesOptions;
}

export function GameSelectionCard({ game }: GameSelectionCardProps) {
  return (
    <Flex
      key={game.name}
      as="a"
      href={`/games/${game.route}`}
      height='150px'
      w='45%'
      borderWidth={2}
      borderColor="purple.900"
      borderRadius="18"
      _hover={{ opacity: 0.5 }}
    >
      <Flex
        width="100%"
        bg="purple.900"
        borderBottomLeftRadius="14"
        borderBottomRightRadius="14"
        alignSelf="flex-end"
        align="center"
        justifyContent="center"
        p="1"
      >
        <Text fontSize="x-large" >{game.name}</Text>
      </Flex>

    </Flex>
  )
}