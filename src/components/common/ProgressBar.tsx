import { Box } from "@chakra-ui/react";

export function ProgressBar() {
  return (
    <Box bg="gray.100" w="100%" h="4" borderRadius="8" >
      <Box bg="green.900" w="20%" h="4" borderRadius="8" />
    </Box>
  )
}