import React from 'react'
import { tournamentTeams } from '../store/teams'
import { Game } from './Game'

export const CourtGames = ({ currCourt }) => {
  const courtGames = tournamentTeams.filter((team) => team.court === currCourt)

  return (
    <>
      {courtGames.map((game) => (
        <Game key={game.name} game={game} />
      ))}
    </>
  )
}
