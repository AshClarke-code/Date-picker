export const iconStyles = {
    width: "2.2rem",
    height: "2.2rem",
    cursor: "pointer"
}


export const currentDate = new Date(Date.now());

export let defaultDate = currentDate.toLocaleDateString().split("/");
defaultDate = `${defaultDate[1] < 10 ? `0${defaultDate[1]}` : defaultDate[1]}/${defaultDate[0] < 10 ? `0${defaultDate[0]}` : defaultDate[0]}/${defaultDate[2]}`;

export const populateDates = (month, year) => {
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