import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FinishedGame } from "../../common/FinishedGame";
import { Card } from "./Card";
import { useMemoryGame } from "./useMemoryGame";

export function MemoryGame() {
  
  const { generateGame, totalMatches } = useMemoryGame();

  const [cards, setCards] = useState(generateGame());

  const [firstCardSelected, setFirstCardSelected] = useState<any>(null);
  const [secondCardSelected, setSecondCardSelected] = useState<any>(null);

  const a = useRef<any>(null);
  const b = useRef<any>(null);
  const unflip = useRef(false);
  const [matches, setMatches] = useState(0);


  function handleFlipp(id: string) {
    const newStateCards = cards.map((card) => {
      // Se o id do cartão não for o id clicado, não faz nada
      if (card.id !== id) return card;
      // Se o cartão já estiver virado, não faz nada
      if (card.flipped) return card;

      // Desviro possíveis cartas erradas
      if (unflip.current && a.current && b.current) {
        a.current.flipped = false;
        b.current.flipped = false;
        a.current = null;
        b.current = null;
        unflip.current = false;
      }

      // Virar o card
      card.flipped = true;

      // Configura primeiro e segundo cartão clicados
      if (a.current === null) {
        a.current = card;
      } else if (b.current === null) {
        b.current = card;
      }

      // Se eu tenho os dois cartão virados
      // Posso checar se estão corretos
      if (a.current && b.current) {
        if (a.current.text === b.current.text) {
          // A pessoa acertou
          a.current = null;
          b.current = null;
          setMatches((m) => m + 1);
        } else {
          // A pessoa errou
          unflip.current = true;
        }
      }

      return card;
    });

    setCards(newStateCards);
  }

  /* useEffect(() => {
    setCards(generateGame());
  }); */

  if(matches == totalMatches) {
    return <FinishedGame />
  }

  return (
    <>
      <h1>{totalMatches}</h1>

      <Flex
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="8"
      maxWidth="2xl"
    >
      {
        cards.map(card => (
          <Card id={card.id} flipped={card.flipped} combined={card.combined} text={card.text} handleFlipp={(id) => handleFlipp(id)} />
        ))
      }

    </Flex>
    </>

  )
}

/* 
const newCards = cards.map(card => {

      if(card.id != id) return card;

      if(card.flipped) return card;

      if (a.current && b.current) {
        a.current = null;
        b.current = null;
        card.flipped = false;
        debugger
        return card;
      }

      card.flipped = true;

      if(a.current == null) {
        debugger
        a.current = card;
      } else if(b.current == null) {
        debugger
        b.current = card;
      }
      
      if(a.current && b.current) {
        debugger
        if(a.current.text == b.current.text) {
        } else {
          debugger
          card.flipped = true;
        }

        
      }

      return card
    });

    setCards(newCards);
*/