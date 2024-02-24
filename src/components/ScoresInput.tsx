import { Button, TableCell, TextField, TableRow } from '@mui/material'

export const ScoresInput = ({
  opponent,
  gameOneScore,
  gameTwoScore,
  handleGameOneChange,
  handleGameTwoChange,
  handleConfirm,
}) => {
  return (
    <TableRow>
      <TableCell>{opponent.teamName}</TableCell>
      <TableCell>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          size="small"
          variant="filled"
          value={gameOneScore}
          onChange={handleGameOneChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          size="small"
          variant="filled"
          value={gameTwoScore}
          onChange={handleGameTwoChange}
        />
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleConfirm}>Confirm</Button>
      </TableCell>
    </TableRow>
  )
}
