import React from 'react'
import { Navbar } from './Navbar'
import Container from '@mui/material/Container'
import { TeamContainer } from './TeamContainer'
import { ButtonGroup, Button, Box } from '@mui/material'
import { useTournament } from '../providers/TournamentProvider'

export const Home = () => {
  const { setCurrCourt } = useTournament()

  const filterByCourt = (e) => {
    setCurrCourt(Number(e.target.value))
  }

  return (
    <Container>
      <Navbar />
      <Box
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '15px' }}
      >
        <ButtonGroup variant="text">
          <Button onClick={filterByCourt} value={0}>
            All courts
          </Button>
          <Button onClick={filterByCourt} value={1}>
            court 1
          </Button>
          <Button onClick={filterByCourt} value={2}>
            court 2
          </Button>
          <Button onClick={filterByCourt} value={3}>
            court 3
          </Button>
        </ButtonGroup>
      </Box>
      <TeamContainer />
    </Container>
  )
}
