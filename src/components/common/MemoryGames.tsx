import { SimpleGrid, Box } from '@chakra-ui/react'

export function MemoryGames() {
  return (
    <SimpleGrid columns={3} spacing={10}>
      <Box as="a" href='/games/memory/200' bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  )
}