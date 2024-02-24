import React from 'react'
import { useTournament } from '../providers/TournamentProvider'
import { AllTeams } from './AllTeams'
import { CourtGames } from './CourtGames'

export const TeamContainer = () => {
  const { currCourt } = useTournament()

  return (
    <>{currCourt === 0 ? <AllTeams /> : <CourtGames currCourt={currCourt} />}</>
  )
}
