"use client"

import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';
import Scorecard from '../Scorecard/Scorecard';
import { useRouter } from 'next/navigation';

const mockdata = [
  {
    name: 'Joe',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    score: '1 Guess Left',
  },
  {
    name: 'Abby',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    score: '3/4',
  },
  {
    name: 'Erin',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    score: 'No Guesses Left',
  },
  {
    name: 'Paul',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    score: '1 guess left',
  },
  {
    name: 'Allie',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    score: '3 guesses left',
  },
];

export function ScoreCardGrid() {

  const router = useRouter();

  const getUserScores = async () => {
    const res = await fetch(`http://localhost:3000/api/score`, {
      method: "get",
    });
    return res;
  };

  const cards = mockdata.map((article, index) => {
    return (
      <Scorecard key={index} article={article} />
    )
  })

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}