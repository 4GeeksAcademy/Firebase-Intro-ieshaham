import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";




const backendHostUrl= 'https://ieshaham-stunning-space-system-ggrvp5x5ggwcx7p-5001.preview.app.github.dev'
function App() {

  const[name,setName]= useState(0);
  const[temp,setTemp]= useState(0);
  const[mintemp_f,setTemp2]= useState(0);
  const[maxtemp_f,setTemp3]= useState(0);
  const[text,setText]=useState(0);
  const[icon,setIcon]=useState(0);
  
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${backendHostUrl}/geeks-firebase-72e6d/us-central1/getDayWeather`
        
      );

      const data = await res.json();

      console.log("The res: ", data);
      setTemp(data.data.current.temp_f);
      setName(data.data.location.name);
      setText(data.data.current.condition.text);
      setIcon("http:"+data.data.current.condition.icon);
      setTemp2(data.data.forecast.forecastday[0].day.mintemp_f);
      setTemp3(data.data.forecast.forecastday[0].day.maxtemp_f);
      
    })();
  }, []);




  return (
    <div className="outer">
    <div className="App">

      <div className="icon"><img src={icon}></img></div>
     <div className="name">{name}</div>
      <div className="temp">{temp}</div>
      <div className="conditionText"><p>{text}</p></div>
      <div className="min-maxtemp"> <p>L:{mintemp_f} &nbsp;&nbsp;&nbsp;&nbsp; H: {maxtemp_f}</p> </div>
   
    </div>
    </div>
  );
}

export default App;
