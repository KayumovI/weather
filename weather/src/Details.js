import './App.css';
import React from 'react';
import {ReactComponent as Vector} from './images/icons/Vector.svg';
import {ReactComponent as SunUp} from './images/icons/Sun up.svg';
import {ReactComponent as SunDown} from './images/icons/Sun down.svg';
function Details({detailsDate}){
    
    
    const feelTemp = Math.round(detailsDate.feels_like)+ '°';
    const pressure = Math.round(detailsDate.pressure * 0.750064)+',00 мм';
    const humidity = detailsDate.humidity+'%';
    const wind = Math.round(detailsDate.wind_speed)+' м/c';
    const visibility = Math.round(detailsDate.visibility/1000) + ' км';
    const sunriseDate  =  new Date(detailsDate.sunrise * 1000);
    const sunrice = sunriseDate.getHours() + ":" + sunriseDate.getMinutes();
    const sunsetDate  =  new Date(detailsDate.sunset * 1000);
    const sunset = sunsetDate.getHours() + ":" + sunsetDate.getMinutes();


    return(
        <div className='details'>
            <div className='details-title'>
                Подробности
            </div>
            <div className='feelTemp'>
                <div className='feelTemp-title'>По ощущениям</div>
                <div className='feelTemp-date'>{feelTemp}</div>
            </div>
            <div className='pressure'>
                <div className='pressure-title'>Давление</div>
                <div className='pressure-date'>{pressure}</div>
            </div>
            <div className='humidity'>
            <div className='humidity-title'>Влажность</div>
            <div className='humidity-date'>{humidity}</div>
            </div>
            <div className='wind'>
            <div className='wind-title'>Ветер</div>
            <div className='wind-date'><Vector className='vector'/>{wind}</div>
            </div>
            <div className='visibility'>
            <div className='visibility-title'>Видимость</div>
            <div className='visibility-date'>{visibility}</div>
            </div>
            <div className='sunrice'>
            <div className='sunrice-title'>Восход</div>
            <div className='sunrice-date'><SunUp className='sunup'/>{sunrice}</div>
            </div>
            <div className='sunset'>
            <div className='sunset-title'>Закат</div>
            <div className='sunset-date'><SunDown className='sundown'/>{sunset}</div>
            </div>
        </div>
    )
}
export default Details;