import { Flex, Text, Heading, } from "@chakra-ui/react";
import Image from "next/image";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { FaLongArrowAltRight } from 'react-icons/fa';

export function ProgressRankCard() {
  return (
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
  )
}