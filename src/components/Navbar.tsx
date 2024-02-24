import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTournament } from '../providers/TournamentProvider'

export const Navbar = () => {
  const { currCourt } = useTournament()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currCourt === 0 ? 'Team Rankings' : `Court ${currCourt}`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
