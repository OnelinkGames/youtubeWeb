import ScheduleList from "./shared/components/schedule-list"
import { List } from "./shared/components/schedule-list.interfaces"
import api from "./configs/api/api-config"
import './App.css'
import { useQuery } from "react-query"

function fetchList(): Promise<Array<List>> {
  return api.get("/schedule-list").then((response) => {
    response.data.forEach((item: any) => {
      item.date = new Date(item.date);
    })

    return response.data
  })
}

function useList() {
  return useQuery<Array<List>, Error>({ queryKey: ["schedule-list"], queryFn: fetchList, refetchOnWindowFocus: true })
}

function App() {
  const { data: list, isLoading, error } = useList()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Algo deu errado!</div>
  }
  
  return (
    <ScheduleList list={list}></ScheduleList>
  )
}

export default App
