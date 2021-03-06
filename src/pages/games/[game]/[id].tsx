import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MemoryGames } from "../../../components/common/MemoryGames";
import { MemoryGame } from "../../../components/Games/MemoryGame";
import { QuizGame } from "../../../components/Games/QuizGame";
import { BodyPage } from "../../../components/pattern/BodyPage";

export default function Game() {

  const router = useRouter();
  const { id, game } = router.query;

  
  return (
    <BodyPage>
        <MemoryGame />
    </BodyPage>
  )
}
