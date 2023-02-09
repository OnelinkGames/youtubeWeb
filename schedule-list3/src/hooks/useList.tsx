import { useQuery } from "react-query";
import api from "../configs/api/api-config";
import { List } from "../shared/components/schedule-list.interfaces";

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

export default useList