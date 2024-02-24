import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

export interface ITournamentContext {
  currCourt: number
  allTeams: any[]
  round: number
  loading: boolean
  error: boolean
  setCurrCourt: (value: number) => void
}

const TournamentContext = createContext<ITournamentContext>(
  {} as ITournamentContext,
)

export const TournamentProvider = ({ children }: any) => {
  const [allTeams, setAllTeams] = useState([])
  const [round, setRound] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currCourt, setCurrCourt] = useState(0)

  // const fetchAllTeams = useCallback(() => {
  //   setLoading(true)
  //   setLoading(false)
  //   create all teams here
  // }, [])
  // const reseed = useCallback(() => {

  // },[])

  const value: ITournamentContext = useMemo(
    () => ({
      allTeams,
      round,
      loading,
      error,
      currCourt,
      setCurrCourt,
    }),
    [allTeams, round, loading, error, currCourt, setCurrCourt],
  )
  return (
    <TournamentContext.Provider value={value}>
      {children}
    </TournamentContext.Provider>
  )
}

export const useTournament = () => {
  return useContext(TournamentContext)
}
