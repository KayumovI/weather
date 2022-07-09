import { useEffect, useState, useSyncExternalStore } from 'react';
import './App.css';
//import { ReactComponent as SunSvg } from './images/sun.svg'
import SvgSelector from './SvgSelector';
import Daily from './Daily';
import Details from './Details';

const API_key = '5eaecfcd63a942fdfe9cf01e7d3c052b'
const lat = '54.139556'
const lon = '49.666127'  

const urlToday = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
const urlDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
function App() {

  const [cloudDescription, setcloudDescription] =  useState('Пусто')
  const [DayTemp, setDayTemp] =  useState('пусто')
  const [City, setCity] =  useState('пусто')
  const [cloudDescriptionIcon, setcloudDescriptionIcon] =  useState('02d')
  const [dailyWeather, setdailyWeather] = useState([])
  const [detailsDate, setdetailsDate] = useState('Пусто')
  

  useEffect(() => {
    const fetchData = async () => {
    const DailyRecponse = await fetch(urlDaily)
    const TodayRecponse = await fetch(urlToday)
    const daily = await DailyRecponse.json()
    setdailyWeather(daily.daily)
    setdetailsDate(daily.current)
    if(TodayRecponse.ok){
      const json = await TodayRecponse.json()
      setCity(json.name)
      setcloudDescription(json.weather[0].description) 
      setDayTemp(Math.round(json.main.temp)+'°')
      setcloudDescriptionIcon(json.weather[0].icon)
    }
    else{
      console.error('Ошибка')
    }
  }
  fetchData();
  }, [])

  return (
    <div className="App">
      <div className='City'>
        {City}
      </div>
      <div className="MainMidle">
        <div className="cloudDescriptionIcon">
        <SvgSelector cssClass="cloudDescriptionIcon" code = {cloudDescriptionIcon}/>
        </div>
        <div className="MainTemp">
        {DayTemp}
        </div>
      </div>
      <div className="cloudDescription">
        {cloudDescription}
      </div>
      <div className='Daily'>
        <Daily dailyWeather={dailyWeather}/>
      </div>
      <div className='rectangle-left'/>
      <div className='rectangle-right'/>
      <Details detailsDate = {detailsDate}/>
    </div>
    
  );
}

export default App;
