import styled, {keyframes} from "styled-components";

const showCalender = keyframes`
    0% {transform: scale(1.0)}
    100% {transform: scale(1.05)}
`;

export const CalendarContainer = styled.div`
    width: 29rem;
    height: 29rem;
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    box-shadow: 15px 15px 20px 1px #888888;
    animation-name:${showCalender};
    animation-duration: .2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
`;


export const CalendarHeader = styled.div`
    width: 100%;
    height: 20%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
`;

export const CalendarHeaderContent = styled.h4`
    text-align: center;
    font-size: 1.6rem;
`;

export const CalendarButton = styled.button`
    height: 60%;
    width: 15%;
    border: 1px solid #D7DAD9;
    font-size: 2rem;
    background-color: white;
    color: grey;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #00aad7; 
    }
`;


export const DateContainer = styled.div`
    height: 80%;
    width: 100%;
    padding: 0 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto, 1fr);
`;

export const DayBlock = styled.div`
    font-size: 1.2rem;
    color: grey:
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const DateBlock = styled.div`
    font-size: 1.2rem;
    color: ${props => props.active ? "white" : "grey"};
    background-color: ${props => props.active ? "#7D91D7" : "white"};
    border: 1px solid ${props => props.active ? "#7D91D7" : "#D7DAD9"};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #00aad7;
        color: white;
        cursor: pointer;
        border: 1px solid #00aad7;
    }

`;
