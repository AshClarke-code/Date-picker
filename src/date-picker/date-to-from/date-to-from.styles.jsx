import styled from "styled-components";

export const InputField = styled.input`
    width: 8rem;
    outline: none;
    border: none;
    display: ${props => props.isActive ? "" : "none"};

`;

export const InputContainer = styled.div`
    max-width: 20rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: .8rem 1rem;
    border: 1px solid grey;
`;

export const CalendarsContainer = styled.div`
    display: ${props => props.isActive ? "grid" : "none"};
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    box-shadow: 15px 15px 20px 1px #888888;
    box-sizing: border-box;
    padding: 1rem;
    margin-top: .5rem;
`;