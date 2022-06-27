import { useEffect } from 'react';
import './App.css';


const API_key = '5eaecfcd63a942fdfe9cf01e7d3c052b'
const lat = '54.139556'
const lon = '49.666127'  
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`

function App() {
  
  useEffect (() => {
  const fetchData = async () => {
    const response = await fetch(url) 
    if (response.ok) {
      const json = await response.json()
      
    }else {
      console.error('Что-то не так')
    }
  }
  fetchData();

  }, [])


  return (
    <div className="App">
      
      Kayumov
    </div>
  );
}

export default App;
