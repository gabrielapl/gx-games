import { SimpleGrid, Box, Flex, HStack, VStack, Progress, Text, Heading, Avatar, Divider, } from "@chakra-ui/react";
import Image from "next/image";
import { ProgressBar } from "../../components/common/ProgressBar";
import { BodyPage } from "../../components/pattern/BodyPage";
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Home() {
  return (
    <BodyPage>
      <Flex
        w="100%"
        justify="space-between"
      >
        <VStack spacing="12">
          <Flex
            bg='purple.900'
            w='xs'
            borderRadius="18"
            px="8"
            justifyContent="center"
            flexDirection="column"
            py="5"
          >
            <Heading size="md">Progresso de rank.</Heading>
            <Flex
              direction="row"
              w="100%"
              justifyContent="space-between"
              my="4"
            >
              <Image src="/gold.svg" width={64} height={64} />
              <FaLongArrowAltRight size="64" />
              <Image src="/diamond.svg" width={64} height={64} />
            </Flex>
            <ProgressBar />
            <Text align="center" mt="2.5" >30/100</Text>
          </Flex>
          <Box
            bg='purple.900'
            w='xs'
            borderRadius="18"
            px="8"
            py="5"
          >
            <Heading size="md">Rank Global.</Heading>
            <Flex>
              <Text color="gray.50" fontSize="small">1º</Text>
              <Avatar size="sm" name="Gabriel Gxguinho" src="https://github.com/gabrielapl.png" />
              <Text color="gray.50" fontSize="small">Gabriel</Text>
              <Image src="/gold.svg" width={32} height={32} />
              <Text color="gray.50" fontSize="small">200 XP</Text>
            </Flex>

          </Box>
        </VStack>
        <Flex ml="20" flexWrap="wrap" w="100%" gap="12">
          <Box as="a" href="#" bg='tomato' height='150px' w='45%'></Box>
          <Box as="a" href="#" bg='tomato' height='150px' w='45%'></Box>
          <Box as="a" href="#" bg='tomato' height='150px' w='45%'></Box>
        </Flex>
      </Flex>
    </BodyPage>
  )
}
