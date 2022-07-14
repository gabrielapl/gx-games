import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import styles from './styles.module.css';

interface CardProps {
  flipped: boolean;
  handleFlipp: (id: number) => void;
  id: number;
}

export function Card({ flipped, handleFlipp, id }: CardProps) {

  return (
    <div className={`${styles.card} ${flipped ? styles['card-flipped'] : ""}`} onClick={() => handleFlipp(id)}>
      <div className={`${styles['card-face']} ${styles.card__faceFront}`} >?</div>
      <div className={`${styles['card-face']} ${styles.card__faceBack}`}>🤞</div>
    </div>
  )
}