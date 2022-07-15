import { useRef, useState } from "react";

export function useMemoryGame() {
  const [totalMatches, setTotalMatches] = useState(0);
  
  function genKey() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    )
  }

  const cards = [
    {
      id: 1,
      flipped: false,
      text: "😘",
      combined: false
    },
    {
      id: 2,
      flipped: false,
      text: "👏",
      combined: false
    },
  ];

  function generateGame() {

    
    let a = cards;
  
    for (let index = 0; index < 5; index++) {
      a = a.concat(cards);
    }

    const sortArray = a.sort(() => Math.random() - 0.5);

    const _cards = sortArray.map(card => ({
      ...card,
      id: genKey()
    }));

    setTotalMatches(_cards.length / cards.length);
    
    return _cards;
  }

  return {
    generateGame,
    totalMatches
  }
}