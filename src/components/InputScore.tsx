import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

export const InputScore = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      team1set2Score: '',
      team1set1Score: '',
      team2set1Score: '',
      team2set2Score: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3">Court 1 Game 1</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}
          >
            <Typography variant="h6">Team 1</Typography>
            <Controller
              name="team1set1Score"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  required={true}
                  value={value}
                  type="number"
                  label={'Set 1 score'}
                />
              )}
            />
            <Controller
              name="team1set2Score"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  required={true}
                  value={value}
                  type="number"
                  label={'Set 2 score'}
                />
              )}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}
          >
            <Typography variant="h6">Team 2</Typography>
            <Controller
              name="team2set1Score"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  required={true}
                  value={value}
                  type="number"
                  label={'Set 1 score'}
                />
              )}
            />
            <Controller
              name="team2set2Score"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  required={true}
                  value={value}
                  type="number"
                  label={'Set 2 score'}
                />
              )}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            fullWidth={false}
          >
            Confirm
          </Button>
        </Box>
      </form>
    </Card>
  )
}
