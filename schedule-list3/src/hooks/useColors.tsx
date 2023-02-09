import { useQuery } from "react-query"
import api from "../configs/api/api-config"
import { ColorList } from "../shared/components/schedule-list.interfaces"

function fetchColors(): Promise<ColorList> {
    return api.get("/colors").then((response) => response.data)
}

function useColors() {
    return useQuery<ColorList, Error>({ queryKey: "colors", queryFn: fetchColors })
}

export default useColors