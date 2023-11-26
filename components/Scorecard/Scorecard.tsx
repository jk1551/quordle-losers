import React, { FC } from 'react'
import classes from './Scorecard.module.css'
import { Card, AspectRatio, Text, Image, Paper, Avatar, Button } from '@mantine/core'

interface ScorecardProps {
    article: {
        name: string,
        image: string, 
        score: string
    }
}

const Scorecard: FC<ScorecardProps> = ({ article }) => {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src={article.image}
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {article.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {article.score}
      </Text>
    </Paper>
  )
}

export default Scorecard