import ScheduleList from './shared/components/schedule-list'
import { List } from './shared/components/schedule-list.interfaces'
import { useEffect, useState } from 'react'
import './App.css'
import api from './configs/api/api-config'

function App() {
  const [list, setList] = useState<Array<List>>([])

  useEffect(() => {
    api.get("/schedule-list").then((response) => {
      
      response.data.forEach((item: any) => {
        item.date = new Date(item.date);
      })

      setList(response.data);
    })
  }, [])

  return (
    <ScheduleList list={list}></ScheduleList>
  )
}

export default App
