import { useEffect, useState } from "react";
import "./schedule-list.scss"

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

// Interface for month list.
interface MonthList {
    [key: number]: string
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

// Function to compare date and return true or false
function compareDate(lastDate: Date, currentDate: Date): boolean {
    let yearCondition: boolean = lastDate.getFullYear() === currentDate.getFullYear();
    let monthCondition: boolean = lastDate.getMonth() == currentDate.getMonth();
    let dayCondition: boolean = lastDate.getDate() === currentDate.getDate();

    if (yearCondition && monthCondition && dayCondition) {
        return true
    }

    return false;
}

// Function to create the final ScheduleList that will be used by the component.
function createScheduleList(list: Array<List>): Array<Array<List>> {
    let newArray: Array<Array<List>> = [];
    let tempArray: Array<List> = [];

    list.forEach((element, index) => {
        if (index != 0) {
            let checkDate = compareDate(list[index -1].date, list[index].date);

            if (checkDate) {
                tempArray.push(element);
            } else {
                newArray.push(tempArray);
                tempArray = [];
                tempArray.push(element);
            }
        } else {
            tempArray.push(element);
        }

        if (index === list.length - 1) {
            newArray.push(tempArray);
        }
    })

    return newArray;
}

function convertMonth(month: number): string {
    let months: MonthList = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    return months[month];
}

function ScheduleList(props: ListProps) {
    // Recovering the props according to the interface.
    const { list } = props;

    // UseState that will be used by the application.
    const [scheduleList, setScheduleList] = useState(Array<Array<List>>)

    // UseEffect used to check the data.
    useEffect(() => {
        // Sorting the data to adjust it accordingly to the date
        let sortedList = list.sort(sortList)

        // Create the ScheduleList that will be used by the component.
        setScheduleList(createScheduleList(sortedList))

        // Print the object
        console.log(scheduleList)
    }, [])

    return (
        <>
            {scheduleList.map((schedule, index) => (
                <div key={index + "List"} className="schedule-date">
                    <p>{schedule[0].date.getDate()} {convertMonth(schedule[0].date.getMonth())}</p>
                    {schedule.map((innerList) => (
                        <div key={innerList.id} className="schedule-item">
                            <div className="time">
                                <p>{innerList.startTime}</p>
                                <p>{innerList.finalTime}</p>
                            </div>
                            <div className={"divider-" + innerList.color}></div>
                            <div className="informations">
                                <p>{innerList.title}</p>
                                <p>{innerList.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default ScheduleList