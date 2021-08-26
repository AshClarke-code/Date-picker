import React, {useState} from "react";
import { ReactComponent as CalendarIcon } from "./calendar.svg";
import { InputField, InputContainer, CalendarContainer, CalendarHeader, CalendarHeaderContent, CalendarButton, DateContainer, DayBlock, DateBlock } from "./date-picker.styles";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
    if(startDate.getDay() > 0){
        minDate = minDate - startDate.getDay();
    }
    if(endDate.getDay() < 6){
        maxDate = maxDate + ( 6 - endDate.getDay());
    }

    //Collect dates
    for(let i = minDate; i <= maxDate; i++){
        dates.push(new Date(year, month, i));
    };


    console.log(dates);
    return dates;

}

const DatePicker = () => {

    const [iconColor, setIconColor] = useState("black");
    const [inputValue, setInputValue] = useState("");
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(1);
    const [dates, setDates] = useState([]);


    const showCalender = event => {
        setIconColor("#00aad7");
        setDates(populateDates(1, 2021));
    };

    const handleClick = (date) => {
        console.log(date.toLocaleDateString());
        const splitDate = date.toLocaleDateString().split("/");

        //DO NOT TOUCH THE TEMPLATE STRING!!!!!!!!!!!!!

        const formattedDate = `${splitDate[1] < 10 ? `0${splitDate[1]}` : splitDate[1]}/${splitDate[0] < 10 ? `0${splitDate[0]}` : splitDate[0]}/${splitDate[2]}`;

        console.log(formattedDate);

        setInputValue(formattedDate);
        
    }

    return (
        <div>
        <InputContainer>
        <InputField placeholder="DD/MM/YY" onFocus={showCalender} value={inputValue}/>
        <CalendarIcon style={iconStyles} fill={iconColor}/>
        </InputContainer>
        <CalendarContainer>
            <CalendarHeader>
                <CalendarButton>&#8592;</CalendarButton>
                <CalendarHeaderContent>{`${months[month]} ${year}`}</CalendarHeaderContent>
                <CalendarButton>&#8594;</CalendarButton>
            </CalendarHeader>
            <DateContainer>
                {
                    days.map((day, index) => {
                        return <DayBlock key={index}>{day.slice(0, 3)}</DayBlock>
                    })

                    
                }
                {
                    dates.map((date, index) => {
                        return <DateBlock key={index + 7} value={date} onClick={() => handleClick(date)}>{date.getDate()}</DateBlock>
                    })
                }
            </DateContainer>
        </CalendarContainer>
        
        </div>
    );
};


export default DatePicker;