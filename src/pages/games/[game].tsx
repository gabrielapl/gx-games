import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MemoryGames } from "../../components/common/MemoryGames";
import { QuizCard } from "../../components/common/Quiz/QuizCard";
import { RowQuiz } from "../../components/common/Quiz/RowQuiz";
import { BodyPage } from "../../components/pattern/BodyPage";
import { QuizOptions } from "../../interfaces/games";

export default function Games() {

  const router = useRouter();
  const { game } = router.query;

  const quizsOptions: QuizOptions[] = [
    {
      type: "Programação",
      quizs: [
        {
          id: 1,
          stepsCurrent: 0,
          stepsTotals: 10,
          title: "Programação I"
        }
      ]
    },
    {
      type: "Anime",
      quizs: [
        {
          id: 200,
          stepsCurrent: 0,
          stepsTotals: 5,
          title: "Qual seu personagem favorito I"
        }
      ]
    }
  ];

  function renderGame(game: string | string[] | undefined) {
    switch (game) {
      case "quiz":
        return quizsOptions.map(quizs => (
          <RowQuiz key={quizs.type} data={quizs} />
        ))
      case "memory":
        return <MemoryGames />
        break;

      default:
        return <h1>Não foi encontrado nenhum jogo</h1>
    }
  }

  return (
    <BodyPage>
      {
        renderGame(game)
      }
    </BodyPage>
  )
}
