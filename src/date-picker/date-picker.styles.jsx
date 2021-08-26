import styled from "styled-components";



export const InputField = styled.input`
    width: 8rem;
    outline: none;
    border: none;

`;

export const InputContainer = styled.div`
    width: 15rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: .8rem 1rem;
    border: 1px solid grey;
`;


export const CalendarContainer = styled.div`
    width: 30rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
    box-shadow: 15px 15px 20px 1px #888888;
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
    color: grey;
    background-color: white;
    border: 1px solid #D7DAD9;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #00aad7;
        color: white;
        cursor: pointer;
        transform: scale(1.1);
        border: none;
    }

`;
