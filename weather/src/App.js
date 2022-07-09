import { useEffect, useState, useSyncExternalStore } from 'react';
import './App.css';
//import { ReactComponent as SunSvg } from './images/sun.svg'

const API_key = '5eaecfcd63a942fdfe9cf01e7d3c052b'
const lat = '54.139556'
const lon = '49.666127'  
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude&appid=${API_key}&units=metric&lang=ru`

function App() {
  const [cloudDescription, setcloudDescription] = useState('')
 
  useEffect (() => {
    const fetchData = async () => {
      const response = await fetch(url) 
      if (response.ok) {
        const json = await response.json()
        setcloudDescription( json.weather[0].description)
        
      }
      else 
      {
      console.error('Что-то не так')
      }
  }
  
  fetchData();
  }, [])


  return (
    <div className="App">
      {cloudDescription}
      
    </div>
   );
}

export default App;
