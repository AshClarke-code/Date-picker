import React, {useState} from "react";
import { ReactComponent as CalendarIcon } from "./calendar.svg";
import { InputField, InputContainer } from "./date-picker.styles";

const iconStyles = {
    width: "1.5rem",
    height: "1.5rem"
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

}

const DatePicker = () => {

    const [iconColor, setIconColor] = useState("black");

    const showCalender = event => {
        setIconColor("#00aad7");
        populateDates(0, 2021);
    };

    return (
        <div>
        <InputContainer>
        <InputField placeholder="DD/MM/YY" onFocus={showCalender}/>
        <CalendarIcon style={iconStyles} fill={iconColor}/>
        </InputContainer>
        
        </div>
    );
};


export default DatePicker;