import { Box, Flex } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Card } from "./Card";

export function MemoryGame() {

  const [cards, setCards] = useState([
    {
      id: 1,
      flipped: false
    },
    {
      id: 2,
      flipped: false
    },
    {
      id: 3,
      flipped: false
    },
    {
      id: 4,
      flipped: false
    }
  ]);

  const [firstCardSelected, setFirstCardSelected] = useState<any>(null);
  const [secondCardSelected, setSecondCardSelected] = useState<any>(null);

  function handleFlipp(id: number) {
    const newCards = cards.map(card => {

      if(card.id != id) return card;

      if(!firstCardSelected) {
        setFirstCardSelected(card);
      }
      
      if(!secondCardSelected) {
        setSecondCardSelected(card);
      }

      if(firstCardSelected && secondCardSelected) {
        

        setFirstCardSelected(null);
        setSecondCardSelected(null);
      }

      return {
        ...card,
        flipped: !card.flipped
      }
      
    });

    setCards(newCards);
  }

  return (
    <Flex
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="8"
      maxWidth="2xl"
    >
      {
        cards.map(card => (
          <Card id={card.id} flipped={card.flipped} handleFlipp={(id) => handleFlipp(id)} />
        ))
      }
    </Flex>
  )
}