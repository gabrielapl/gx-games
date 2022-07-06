import { Button, Flex, IconButton, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { BsGoogle } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';

export default function Login() {
  return (
    <Flex
      w="100vw"
      h="100vh"
    >
      <Flex
        w="50%"
        h="100%"
        bg="purple.900"
        align="center"
        justify="center"
      >
        <Image src="/gaming.gif" alt="Vercel Logo" width={500} height={500} />
      </Flex>

      <Flex
        w="50%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
      >

        <IconButton
          variant='solid'
          colorScheme='red'
          aria-label='Call Sage'
          fontSize='22px'
          mb="6"
          size="lg"
          w={250}
          icon={<BsGoogle />}
        />

        <IconButton
          variant='solid'
          bg="#7289DA"
          colorScheme="blue"
          aria-label='Call Sage'
          fontSize='22px'
          size="lg"
          mb="6"
          w={250}
          icon={<SiDiscord />}
        />

        <Divider w={250} />

        <Button
          w={250}
          size="lg"
          type="submit"
          colorScheme="purple"
          m="8"
        >
          Entrar sem conta
        </Button>

      </Flex>
    </Flex>
  )
}