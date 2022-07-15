import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import styles from './styles.module.css';

interface CardProps {
  flipped: boolean;
  handleFlipp: (id: string) => void;
  id: string;
  text: string;
  combined: boolean;
}

export function Card({ flipped, handleFlipp, id, text, combined }: CardProps) {

  return (
    <div className={`${styles.card} ${flipped ? styles['card-flipped'] : ""} ${combined ? styles['card-disabled'] : ""}`} onClick={() => handleFlipp(id)}>
      <div className={`${styles['card-face']} ${styles.card__faceFront}`} >?</div>
      <div className={`${styles['card-face']} ${styles.card__faceBack}`}>{text}</div>
    </div>
  )
}