import React, {useState, useEffect} from "react";
import { ReactComponent as CalendarIcon } from "./calendar.svg";
import { ContainerDiv, InputField, InputContainer, CalendarContainer, CalendarHeader, CalendarHeaderContent, CalendarButton, DateContainer, DayBlock, DateBlock } from "./date-picker.styles";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDate = new Date(Date.now());
let defaultDate = currentDate.toLocaleDateString().split("/");
defaultDate = `${defaultDate[1] < 10 ? `0${defaultDate[1]}` : defaultDate[1]}/${defaultDate[0] < 10 ? `0${defaultDate[0]}` : defaultDate[0]}/${defaultDate[2]}`;

const iconStyles = {
    width: "2.2rem",
    height: "2.2rem"
}

const populateDates = (month, year) => {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month, 31);
    let minDate = 1;
    let maxDate = 31;
    const dates = [];

    //For Day overflow
    if(startDate.getDay() > 0) minDate = minDate - startDate.getDay();
    
    if(endDate.getDay() < 6) maxDate = maxDate + ( 6 - endDate.getDay());

    //Collect dates
    for(let i = minDate; i <= maxDate; i++){
        dates.push(new Date(year, month, i));
    };

    return dates;

};

const DatePicker = () => {
    
    const [iconActive, setIconActive] = useState(false);
    const [inputValue, setInputValue] = useState(defaultDate);
    const [year, setYear] = useState(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth());
    const [dates, setDates] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [activeDate, setActiveDate] = useState(currentDate.toLocaleDateString());

    useEffect(() => {
        setDates(populateDates(month, year));
    }, [year, month]);

    const handleButtonClick = event => {
        if(event.target.name === "forward" && month === 11) {

            setMonth(0);
            setYear(year + 1);

        } else if(event.target.name === "back" && month === 0){

            setMonth(11);
            setYear(year - 1);

        } else if(event.target.name === "back") {

            setMonth(month - 1);

        } else if(event.target.name === "forward"){

            setMonth(month + 1);

        }
    };

    const showCalender = event => {
        setIconActive(!iconActive);
        setIsVisible(!isVisible);

    };

    const handleDateClick = (date) => {
        setInputValue("");
        setActiveDate(date.toLocaleDateString());
        const splitDate = date.toLocaleDateString().split("/");

        //DO NOT TOUCH THE TEMPLATE STRING!!!!!!!!!!!!!

        const formattedDate = `${splitDate[1] < 10 ? `0${splitDate[1]}` : splitDate[1]}/${splitDate[0] < 10 ? `0${splitDate[0]}` : splitDate[0]}/${splitDate[2]}`;
        setInputValue(formattedDate);
        
    };

    const checkActive = date => {
    //This didn't work as a ternary and I don't know why.
        if(activeDate === date.toLocaleDateString()) return true;
        return false;

    };

    return (
        <ContainerDiv>
        <InputContainer onClick={showCalender} >
        <InputField placeholder="DD/MM/YY" value={inputValue} name="date" readOnly/>
        <CalendarIcon style={iconStyles} fill={`${iconActive ? "#00aad7" : "black"}`}/>
        </InputContainer>
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
                        return <DateBlock key={index + 7} value={date} onClick={() => handleDateClick(date)} active={checkActive(date)} >{date.getDate()}</DateBlock>
                    })
                }
            </DateContainer>
        </CalendarContainer>
        
        </ContainerDiv>
    );
};


export default DatePicker;