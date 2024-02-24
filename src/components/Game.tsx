import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'

export const Game = ({ game }) => {
  console.log('game', game)
  return (
    <Card>
      <CardHeader title="Game 1" />
      <CardContent>{/* <Typography>{game}</Typography> */}</CardContent>
    </Card>
  )
}
