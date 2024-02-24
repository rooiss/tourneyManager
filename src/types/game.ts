import { Team } from './team'

export interface Game {
  court: number
  /**
   * array of objects with score and team id
   */
  teams: {
    name: string
    set1Score: number
    set2Score: number
    id: string
  }[]
  reffingTeam: Team
  winner: number | undefined
  id: string
  // tie?
  // done: boolean
  status: 'not started' | 'in progress' | 'done'
}
