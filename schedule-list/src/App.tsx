import ScheduleList from './shared/components/schedule-list'
import { List } from './shared/components/schedule-list.interfaces'
import './App.css'
import { Loading } from './shared/components/schedule-list.styles'
import useList from './hooks/useList'

function App() {
  const { data: list, isLoading, error } = useList()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Algo deu errado!</div>
  }

  return (
    <ScheduleList list={list}></ScheduleList>
  )
}

export default App
