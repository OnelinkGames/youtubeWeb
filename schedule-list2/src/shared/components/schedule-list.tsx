import { useEffect } from "react";

// Interface for the list of mocked data.
export interface List {
    id: number,
    date: Date,
    startTime: string,
    finalTime: string,
    title: string,
    description: string,
    color: string
  }

// Interface for the props of the component.
interface ListProps {
    list: Array<List>
}

// Function to sort the data using the data as a parameter.
function sortList(firstDate: List, lastDate: List) {
    if (firstDate.date.getTime() < lastDate.date.getTime())
        return -1;

    if (firstDate.date.getTime() > lastDate.date.getTime())
        return 1;

    // Return in case of dates being equal.
    return 0;
}

function ScheduleList(props: ListProps) {
    // Recovering the props according to the interface.
    const { list } = props;

    // UseEffect used to check the data.
    useEffect(() => {
        // Sorting the data to adjust it accordingly to the date
        let sortedList = list.sort(sortList)

        console.log(sortedList);
    }, [])

    return (
        <div>{JSON.stringify(list)}</div>
    )
}

export default ScheduleList