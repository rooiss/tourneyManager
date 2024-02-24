import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { ScoresInput } from './ScoresInput'

export const Row = (props: { team }) => {
  const { team } = props
  const [open, setOpen] = useState(false)
  const [gameOneScore, setGameOneScore] = useState(0)
  const [gameTwoScore, setGameTwoScore] = useState(0)

  // when setting score it must update both teams score
  const handleGameOneChange = (team) => (e) => {
    e.preventDefault()
    setGameOneScore(Number(e.target.value))
  }
  const handleGameTwoChange = (e) => {
    e.preventDefault()
    setGameTwoScore(Number(e.target.value))
  }

  const handleConfirm = () => {
    console.log('confirmed')
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand team"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {team.rank}
        </TableCell>
        <TableCell align="left">{team.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Scores
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <TableCell>Set 1</TableCell>
                    <TableCell>Set 2</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {team.opponents.map((opponent) => (
                    <ScoresInput
                      opponent={opponent}
                      key={opponent.teamName}
                      gameOneScore={gameOneScore}
                      gameTwoScore={gameTwoScore}
                      handleConfirm={handleConfirm}
                      handleGameOneChange={handleGameOneChange}
                      handleGameTwoChange={handleGameTwoChange}
                    />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
