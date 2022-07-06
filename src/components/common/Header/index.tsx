import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      mt="4"
      align="center"
    >
      <Logo />

      <Flex
        align="center"
        ml="auto"
      >

        {/* <Notifications /> */}

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}