import { Box, Button, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FinishedGame } from "../../common/FinishedGame";

interface Quiz {

}

export function QuizGame() {


  const [step, setStep] = useState<number | null>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [selectAnswer, setSelectAnswer] = useState<number[]>([]);

  const quiz = [
    {
      question: "Qual seu japa favorito",
      answers: [
        { id: 1, answer: "Um portal", is: true },
        { id: 2, answer: "Um Rei", is: true },
        { id: 3, answer: "Um Queijo", is: true },
        { id: 4, answer: "UM Pau", is: true }
      ]
    },
    {
      question: "Qual seu japa favorito1",
      answers: [
        { id: 5, answer: "Um portal2", is: true },
        { id: 6, answer: "Um Rei", is: true },
        { id: 7, answer: "Um Queijo", is: true },
        { id: 8, answer: "UM Pau", is: true }
      ]
    },
    {
      question: "Qual seu japa favorito2",
      answers: [
        { id: 9, answer: "Um porta3l", is: true },
        { id: 10, answer: "Um Rei", is: true },
        { id: 11, answer: "Um Queijo", is: true },
        { id: 12, answer: "UM Pau", is: true }
      ]
    }
  ];

  const lastQuiz = quiz.length - 1;

  if (step === null) {
    return (
      <FinishedGame />
    )
  }

  return (
    <Flex
      justify="center"
      w="100%"
    >
      <Box
        w="lg"
      >

        <Stack
          spacing="8"
        >
          <Heading fontSize="lg" >SProgramação I</Heading>
          <Stack direction="row" spacing={4} align='center' >
            {
              quiz.map((_, index) => (
                <Button
                  key={index}
                  bg={step == index ? "purple" : "purple.900"}
                  colorScheme="purple"
                  borderRadius='50%'
                  onClick={() => {
                    setSelectedAnswer(null);
                    setStep(index);
                  }}
                >
                  {index + 1}
                </Button>
              ))
            }

          </Stack>
          <Text >{quiz[step!].question}</Text>

          <Stack
            direction="column" spacing="6"
          >
            {
              quiz[step!].answers.map(quiz => (
                <Button key={quiz.id} colorScheme={selectedAnswer == quiz.id ? "purple" : "gray"} variant='outline' onClick={() => {
                  setSelectedAnswer(quiz.id);
                  setSelectAnswer(oldValue => [...oldValue, quiz.id]);
                }}  >
                  {quiz.answer}
                </Button>
              ))
            }
            <Button  colorScheme='purple' bg="purple.900" variant='solid' disabled={selectedAnswer == null} onClick={() => {
              setSelectedAnswer(null);
              setStep(lastQuiz == step ? null : step! + 1);
            }} >
              {lastQuiz == step ? "Finalizar" : "Proximo"}
            </Button>
          </Stack>
        </Stack>


      </Box>
    </Flex>
  )
}