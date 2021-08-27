import React from "react";
import { CalendarContainer, CalendarHeader, CalendarButton, CalendarHeaderContent, DateContainer, DayBlock, DateBlock } from "./calendar.styles";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const Calendar = ({month, year, isVisible, dates, handleButtonClick, handleDateClick, checkActive}) => {
    return (
        <CalendarContainer isVisible={isVisible}>
        <CalendarHeader>
            <CalendarButton name="back" onClick={handleButtonClick}>&#8592;</CalendarButton>
            <CalendarHeaderContent>{`${months[month]} ${year}`}</CalendarHeaderContent>
            <CalendarButton name="forward" onClick={handleButtonClick}>&#8594;</CalendarButton>
        </CalendarHeader>
        <DateContainer>
            {
                days.map((day, index) => {
                    return <DayBlock key={index}>{day.slice(0, 3)}</DayBlock>
                })

                
            }
            {
                dates.map((date, index) => {
                    if(date.getMonth() !== month) return <div key={index + 7}></div>;
                    return <DateBlock 
                            key={index + 7} 
                            value={date} 
                            onClick={() => handleDateClick(date)} 
                            active={checkActive(date)}>
                                {
                                    date.getDate()
                                }
                            </DateBlock>
                })
            }
        </DateContainer>
    </CalendarContainer>
    );
};



export default Calendar;