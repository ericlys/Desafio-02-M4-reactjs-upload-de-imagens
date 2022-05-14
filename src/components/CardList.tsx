import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {cards &&
          cards.map(card => (
            <Box h="290" maxW="293.3px" background="#353431" borderRadius={6}>
              <Image
                borderRadius="6px 6px 0 0"
                src={card.url}
                objectFit="cover"
                h={192.64}
                w={293.3}
              />
              <Box pt={5} px={6}>
                <Heading fontSize="2xl">{card.title}</Heading>
                <Text mt={2} fontSize="lg">
                  {card.description}
                </Text>
              </Box>
            </Box>
          ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
