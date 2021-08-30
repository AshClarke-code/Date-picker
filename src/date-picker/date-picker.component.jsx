import React, {useState, useEffect} from "react";
import { ReactComponent as CalendarIcon } from "./calendar.svg";
import Calendar from "./calendar/calendar.component";
import { ContainerDiv, InputContainer, InputField } from "./date-picker.styles";
import { populateDates, defaultDate, currentDate, iconStyles } from "./date-picker.utils";



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
        <InputContainer onClick={showCalender}>
        <InputField placeholder="DD/MM/YY" value={inputValue} name="date" readOnly/>
        <CalendarIcon style={iconStyles} fill={`${iconActive ? "#00aad7" : "black"}`}/>
        </InputContainer>
        
        <Calendar
        single 
        month={month} 
        year={year} 
        dates={dates} 
        isVisible={isVisible} 
        handleButtonClick={handleButtonClick} 
        checkActive={checkActive} 
        handleDateClick={handleDateClick}/>
        
        </ContainerDiv>
    );
};


export default DatePicker;