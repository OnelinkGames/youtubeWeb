import { useEffect, useState } from "react";
import api from "../../configs/api/api-config";
import { ColorList, List, ListProps, MonthList } from "./schedule-list.interfaces";
import { HeaderDate, SchedList, TimeSector, Divider, InformationsSector } from "./schedule-list.styles";

// Function to sort the data using the data as a parameter.
function sortList(firstDate: List, lastDate: List) {
    return firstDate.date.getTime() - lastDate.date.getTime();
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

function getColor(colors: ColorList, color: string, type: string): string {

    let finalColor = colors[color];

    return type == "base" ? finalColor.base : finalColor.shadow;
}

function ScheduleList(props: ListProps) {
    // Recovering the props according to the interface.
    const { list } = props;

    // UseState that will be used by the application.
    const [scheduleList, setScheduleList] = useState<Array<Array<List>>>([])

    // UseState that will be used for storing the colors.
    const [colors, setColors] = useState<ColorList>({})

    // UseEffect used to check the data.
    useEffect(() => {
        if (list.length > 0) {
            // Sorting the data to adjust it accordingly to the date
            let sortedList = list.sort(sortList)

            // Create the ScheduleList that will be used by the component.
            setScheduleList(createScheduleList(sortedList))
        }
    }, [list])

    useEffect(() => {
        api.get("/colors").then((response) => setColors(response.data))
    }, [])

    return (
        <>
            {scheduleList.map((schedule, index) => (
                <HeaderDate key={index + "List"}>
                    <p>{schedule[0].date.getDate()} {convertMonth(schedule[0].date.getMonth())}</p>
                    {schedule.map((innerList) => (
                        <SchedList key={innerList.id}>
                            <TimeSector>
                                <p>{innerList.startTime}</p>
                                <p>{innerList.finalTime}</p>
                            </TimeSector>
                            <Divider 
                                base_color={getColor(colors, innerList.color, "base")}
                                shadow_color={getColor(colors, innerList.color, "shadow")} />
                            <InformationsSector>
                                <p>{innerList.title}</p>
                                <p>{innerList.description}</p>
                            </InformationsSector>
                        </SchedList>
                    ))}
                </HeaderDate>
            ))}
        </>
    )
}

export default ScheduleList