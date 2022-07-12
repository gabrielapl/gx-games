import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      as="a"
      href="/home"
    > 
      <Text as="span">gx</Text>
      <Text color="purple.900" as="span" ml="1">Games</Text>
    </Text>
  )
}