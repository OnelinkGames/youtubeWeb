import ScheduleList from "./shared/components/schedule-list"
import { List } from "./shared/components/schedule-list.interfaces"
import api from "./configs/api/api-config"
import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [list, setList] = useState<Array<List>>([])

  useEffect(() => {
    api.get("/schedule-list").then((response) => {

      response.data.forEach((item: any) => {
        item.date = new Date(item.date)
      })

      setList(response.data)
    })
  }, [])

  return (
    <ScheduleList list={list}></ScheduleList>
  )
}

export default App
