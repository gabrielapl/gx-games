import { SimpleGrid, Box, Flex, HStack, VStack, Progress, Text, Heading, Avatar, Divider, List, } from "@chakra-ui/react";
import Image from "next/image";
import { ProgressBar } from "../../components/common/ProgressBar";
import { BodyPage } from "../../components/pattern/BodyPage";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { RankGlobalCard } from "../../components/common/Card/RankGlobal";
import { GamesOptions } from "../../interfaces/games";
import { ProgressRankCard } from "../../components/common/Card/ProgressRankCard";
import { GameSelectionCard } from "../../components/common/Card/GameSelectionCard";

export default function Home() {

  const games: GamesOptions[] = [
    {
      name: "Quiz",
      route: "quiz"
    },
    {
      name: "Jogo da Memoria",
      route: "memory"
    },
  ];

  return (
    <BodyPage>
      <Flex
        w="100%"
        justify="space-between"
      >

        <VStack spacing="12">
          <ProgressRankCard />
          <RankGlobalCard />
        </VStack>

        <Flex ml="20" flexWrap="wrap" w="100%" gap="12">
          {
            games.map(game => (
              <GameSelectionCard game={game} />
            ))
          }
        </Flex>

      </Flex>
    </BodyPage>
  )
}

