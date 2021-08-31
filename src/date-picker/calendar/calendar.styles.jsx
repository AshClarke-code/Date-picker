import styled, {keyframes, css} from "styled-components";

const showCalender = keyframes`
    0% {transform: scale(1.0)}
    100% {transform: scale(1.05)}
`;


const singleCalendarStyles = css`
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    box-shadow: 15px 15px 20px 1px #888888;
    margin-top: 1rem;
    animation-name:${showCalender};
    animation-duration: .2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    z-index: 1000;
    position: absolute;

`;

const doubleCalendarContainerStyles = css`
    box-shadow: none;
    margin: none;
`;

const getCalendarContainerStyles = props => {
    
    return props.single ? singleCalendarStyles : doubleCalendarContainerStyles;
    
    
}

export const CalendarContainer = styled.div`
    width: 29rem;
    height: 29rem;
    
    ${getCalendarContainerStyles}
    
`;

// 


export const CalendarHeader = styled.div`
    width: 100%;
    height: 20%;
    position: relative;
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

const activeDateStyles = css`
    color: white;
    background-color: #7D91D7;
    border: 1px solid #7D91D7;

    &:hover {
        background-color: #00aad7;
        color: white;
        cursor: pointer;
        border: 1px solid #00aad7;
    }
    
`;

const inactiveDateStyles = css`
    color: grey;
    background-color: white;
    border: 1px solid #D7DAD9;

    &:hover {
        background-color: #00aad7;
        color: white;
        cursor: pointer;
        border: 1px solid #00aad7;
    }


`;

const betweenDateStyles = css`
    color: white;
    background-color: #00aad7;
    border: 1px solid #00aad7;

    &:hover {
        background-color: white;
        color: grey;
        cursor: pointer;
        border: 1px solid #D7DAD9;
    }
`;


const getDateBlockStyles = props => {
    if(!props.active && !props.isBetween) return inactiveDateStyles;
    if(props.active) return activeDateStyles;
    if(props.isBetween) return betweenDateStyles;

}


export const DateBlock = styled.div`
    font-size: 1.2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    ${getDateBlockStyles}

`;
