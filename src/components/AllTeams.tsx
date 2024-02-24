import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { tournamentTeams } from '../store/teams'

export const AllTeams = () => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Rank</TableCell>
          <TableCell align="left">Team Name</TableCell>
          <TableCell align="right">Wins</TableCell>
          <TableCell align="right">Losses</TableCell>
          <TableCell align="right">Point Differential</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tournamentTeams.map((team) => (
          <TableRow
            key={team.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="team">
              {team.rank}
            </TableCell>
            <TableCell align="left">{team.name}</TableCell>
            {/* <TableCell align="right">{team.wins}</TableCell>
            <TableCell align="right">{team.losses}</TableCell>
            <TableCell align="right">{team.pointDiff}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
