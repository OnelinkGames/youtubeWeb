export interface List {
    id: number,
    date: Date,
    startTime: string,
    finalTime: string,
    title: string,
    description: string,
    color: string
  }

interface ListProps {
    list: Array<List>
}

function ScheduleList(props: ListProps) {
    const { list } = props;

    return (
        <div>{JSON.stringify(list)}</div>
    )
}

export default ScheduleList