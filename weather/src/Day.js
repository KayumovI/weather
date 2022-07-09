import PropTypes from "prop-types";
import SvgSelector from "./SvgSelector";
function Day ({dt, codeIcon, temp, tempNight}) {
    var date = new Date(dt*1000)
    var number = date.getDate()
    var today = new Date()
    var day = date.getDay()
    var border = "day";
    let week;
    if(today.getDate() == number){
      week = "Сегодня"
      border = "border";
    }
    else if(today.getDate() + 1 == number){
      week = "Завтра"
    }
    else{
    switch(day){
      case 1:
      week = "Пн "+ number;
      break;
      case 2:
      week = "Вт " + number;
      break;
      case 3:
      week = "Ср " + number;
      break;
      case 4:
      week = "Чт " + number;
      break;
      case 5:
      week = "Пт " + number;
      break;
      case 6:
      week = "Сб " + number;
      break;
      case 0:
      week = "Вс " + number;
      break;
      default:
        week = "пусто";
        break
    }}
    return (
        <div className={border}>
            <div className="Date">{week}</div>
            <SvgSelector cssClass="day-cloudDescriptionIcon" code = {codeIcon}/>
            <div className="day-temp-main">
              <div className="day-temp">{Math.round(temp)+'°'}</div>
              <div className="day-temp-mid">{Math.round(tempNight)+'°'}</div>
            </div>
        </div>
    )
}

export default Day;