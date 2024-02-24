import React from 'react'
import { Home } from './components/Home'
import { TournamentProvider } from './providers/TournamentProvider'

function App() {
  return (
    <TournamentProvider>
      <Home />
    </TournamentProvider>
  )
}

export default App
