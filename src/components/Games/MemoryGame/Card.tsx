import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import styles from './styles.module.css';

export function Card() {

  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)} >
      <div className={`${styles.card__content} ${flipped ? styles['card__content--flipped'] : ""}`}>
        <div className={`${styles.card__face} ${styles.card__faceFront}`}>?</div>
        <div className={`${styles.card__face} ${styles.card__faceBack}`}>2</div>
      </div>
    </div>
  )
}
