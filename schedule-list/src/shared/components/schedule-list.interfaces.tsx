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
export interface ListProps {
    list?: Array<List>
}

// Interface for month list.
export interface MonthList {
    [key: number]: string
}

// Interface for colors
export interface Colors {
    base: string,
    shadow: string
}

// Interface for color list.
export interface ColorList {
    [key: string]: Colors
}

export interface DividerProps {
    base_color?: string,
    shadow_color?: string
}