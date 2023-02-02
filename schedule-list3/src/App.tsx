import ScheduleList from "./shared/components/schedule-list"
import { List } from "./shared/components/schedule-list.interfaces"
import api from "./configs/api/api-config"
import './App.css'
import { useEffect, useState } from "react"

// Mocked data to use on component.
const mock: Array<List> = [
  {
    id: 0,
    date: new Date("2023-01-20T08:30:00"),
    startTime: "08:30",
    finalTime: "09:30",
    title: "Marketing",
    description: "3 categories of rocks",
    color: "orange"
  },
  {
    id: 1,
    date: new Date("2023-01-19T09:30:00"),
    startTime: "09:30",
    finalTime: "11:45",
    title: "Strategy Planning",
    description: "Launch day Bestbuy",
    color: "purple"
  },
  {
    id: 2,
    date: new Date("2023-01-20T11:00:00"),
    startTime: "11:00",
    finalTime: "12:15",
    title: "Discovery",
    description: "Financian project",
    color: "red"
  },
  {
    id: 3,
    date: new Date("2023-01-19T14:30:00"),
    startTime: "14:30",
    finalTime: "16:20",
    title: "Developing",
    description: "Setup GitHub repository",
    color: "blue"
  }
]

function App() {
  const [list, setList] = useState<Array<List>>([])

  useEffect(() => {
    api.get("/schedule-list").then((response) => {

      response.data.forEach((item: any) => {
        item.date = new Date(item.date)
      })

      setList(response.data)
    })
  }, [list])

  return (
    <ScheduleList list={list}></ScheduleList>
  )
}

export default App
