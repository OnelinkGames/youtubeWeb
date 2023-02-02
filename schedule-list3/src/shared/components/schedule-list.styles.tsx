import styled from "styled-components"
import { DividerProps } from "./schedule-list.interfaces"

export const HeaderDate = styled.div`
        color: #9E9CA9;
        margin: 20px;
    `

export const SchedList = styled.div`
        width: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
    `

export const TimeSector = styled.div`
        p {
        margin: 0px;
        padding: 0px;
        }

        p:nth-child(1) {
            font-size: 1.2em;
            font-weight: bolder;
            color: #51438E;
        };

        p:nth-child(2) {
            font-size: 0.6em;
            color: #D1D1D9;
            vertical-align: text-top;
        };
    `

export const Divider = styled.div.attrs<DividerProps>(props => ({
    base_color: props.base_color || "#CF9A66",
    shadow_color: props.shadow_color || "#CE9C66E6"
})) <DividerProps>`
        height: 30px;
        width: 3px;
        margin-right: 20px;
        margin-left: 20px;
        border: 1px solid ${props => props.base_color};
        border-radius: 10px;
        background-color: ${props => props.base_color};
        -webkit-box-shadow:0px 0px 10px 1px ${props => props.shadow_color};
        -moz-box-shadow: 0px 0px 10px 1px ${props => props.shadow_color};
        box-shadow: 0px 0px 10px 1px ${props => props.shadow_color};
    `

export const InformationsSector = styled.div`
        p {
        margin: 0px;
        padding: 0px;
        }

        p:nth-child(1) {
            color: #9E9CA9;
            font-size: 0.8em;
        };

        p:nth-child(2) {
            color: black;
            font-size: 0.8em;
        };
    `