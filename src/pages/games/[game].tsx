import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { QuizCard } from "../../components/common/Quiz/QuizCard";
import { RowQuiz } from "../../components/common/Quiz/RowQuiz";
import { BodyPage } from "../../components/pattern/BodyPage";

export default function Games() {

  const router = useRouter();
  const { game } = router.query;

  return (
    <BodyPage>
        <RowQuiz />
        <RowQuiz />
    </BodyPage>
  )
}
