import React, {useState, useEffect} from "react";
import { ReactComponent as CalendarIcon } from "./../calendar.svg";
import Calendar from "../calendar/calendar.component";
import { InputContainer, InputField, CalendarsContainer } from "./date-to-from.styles";
import { iconStyles, populateDates, currentDate, defaultDate } from "../date-picker.utils";



const DateToFrom = () => {
    const [isActive, setIsActive] = useState(false);

    //Calendar 1
    const [inputDateFrom, setInputDateFrom] = useState(defaultDate);
    const [yearFrom, setYearFrom] = useState(currentDate.getFullYear());
    const [monthFrom, setMonthFrom] = useState(currentDate.getMonth());
    const [datesFrom, setDatesFrom] = useState([]);
    const [activeDateFrom, setActiveDateFrom] = useState(currentDate.toLocaleDateString());

    //Calendar 2
    const [inputDateTo, setInputDateTo] = useState(defaultDate);
    const [yearTo, setYearTo] = useState(currentDate.getFullYear());
    const [monthTo, setMonthTo] = useState(currentDate.getMonth() + 1);
    const [datesTo, setDatesTo] = useState([]);
    const [activeDateTo, setActiveDateTo] = useState(currentDate.toLocaleDateString());

    useEffect(() => {
        setDatesFrom(populateDates(monthFrom, yearFrom));
    }, [yearFrom, monthFrom]);

    useEffect(() => {
        setDatesTo(populateDates(monthTo, yearTo));
    }, [yearTo, monthTo]);

    const showCalendar = event => {
        setIsActive(!isActive);
    }

    const checkActiveFrom = date => {
            if(activeDateFrom === date.toLocaleDateString()) return true;
            return false;
        };

    const checkActiveTo = date => {
            if(activeDateTo === date.toLocaleDateString()) return true;
            return false;
        };

    const checkIsBetween = date => {
        const parsedDate = Date.parse(date.toLocaleDateString());
        const parsedFrom = Date.parse(activeDateFrom);
        const parsedTo = Date.parse(activeDateTo);
        if(parsedDate > parsedFrom && parsedDate < parsedTo) return true;
        return false;
    
    }

    const handleButtonClick = event => {
        switch(event.target.name){
             case "forward1":
                if(monthFrom === 11){
                    setMonthFrom(0);
                    setYearFrom(yearFrom + 1);
                } else {
                    setMonthFrom(monthFrom + 1);
                }
                    
            break;

            case "back1":
                 if(monthFrom === 0){
                    setMonthFrom(11);
                    setYearFrom(yearFrom - 1);
                } else {
                     setMonthFrom(monthFrom - 1);
                }
                    
            break;
            case "forward2":
                if(monthTo === 11){
                    setMonthTo(0);
                    setYearTo(yearTo + 1);
                } else {
                    setMonthTo(monthTo + 1);
                }
                    
            break;
            case "back2":
                if(monthTo === 0){
                    setMonthTo(11);
                    setYearTo(yearTo - 1);
                } else {
                    setMonthTo(monthTo - 1);
                }
                    
            break;

            default: 
            }
        };
    
    
        const handleDateClickFrom = (date) => {
            setInputDateFrom("");
            setActiveDateFrom(date.toLocaleDateString());
            const splitDate = date.toLocaleDateString().split("/");
    
            //DO NOT TOUCH THE TEMPLATE STRING!!!!!!!!!!!!!
    
            const formattedDate = `${splitDate[1] < 10 ? `0${splitDate[1]}` : splitDate[1]}/${splitDate[0] < 10 ? `0${splitDate[0]}` : splitDate[0]}/${splitDate[2]}`;
            setInputDateFrom(formattedDate);
            
        };

        const handleDateClickTo = (date) => {
            setInputDateTo("");
            setActiveDateTo(date.toLocaleDateString());
            const splitDate = date.toLocaleDateString().split("/");
    
            //DO NOT TOUCH THE TEMPLATE STRING!!!!!!!!!!!!!
    
            const formattedDate = `${splitDate[1] < 10 ? `0${splitDate[1]}` : splitDate[1]}/${splitDate[0] < 10 ? `0${splitDate[0]}` : splitDate[0]}/${splitDate[2]}`;
            setInputDateTo(formattedDate);
            
        };


    return (
        <div>
            <InputContainer onClick={showCalendar}>
                <InputField placeholder="DD/MM/YY" isActive value={inputDateFrom} readOnly/>
                <InputField placeholder="DD/MM/YY" isActive={isActive} value={inputDateTo} readOnly/>
                <CalendarIcon style={iconStyles} fill={`${isActive ? "#00aad7" : "black"}`}/>
            </InputContainer>
            <CalendarsContainer isActive={isActive}>
            <Calendar 
            month={monthFrom} 
            year={yearFrom} 
            dates={datesFrom} 
            isVisible={isActive}
            backName={"back1"}
            forwardName={"forward1"} 
            handleButtonClick={handleButtonClick} 
            checkActive={checkActiveFrom}
            checkIsBetween={checkIsBetween}
            handleDateClick={handleDateClickFrom}/>

            <Calendar 
            month={monthTo} 
            year={yearTo} 
            dates={datesTo} 
            isVisible={isActive}
            backName={"back2"}
            forwardName={"forward2"}  
            handleButtonClick={handleButtonClick} 
            checkActive={checkActiveTo}
            checkIsBetween={checkIsBetween} 
            handleDateClick={handleDateClickTo}/>
            </CalendarsContainer>

        </div>
    );
};


export default DateToFrom;