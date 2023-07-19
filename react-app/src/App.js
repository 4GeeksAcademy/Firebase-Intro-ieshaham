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
  const [epotch, setEpotch] = useState("");
  const [epotch1h, setEpotch1H] = useState("");
  const [epotch2h, setEpotch2H] = useState("");
  const [hour0, setHour0] = useState("");
  const [currenttime, setCurrentTime] = useState("");
  const [hours, setHours] = useState([]);
  
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
      setEpotch(data.data.current.condition.last_updated_epoch);
      setHour0(data.data.forecast.forecastday[0].hour[0]);
      setHours(data.data.forecast.forecastday[0].hour);
      
      // for (let i = 0; i < 24; i++) {
        //   if (epotch < setEpotch1H(data.data.forecast.forecastday[0].hour[i].time_epoch)) {
        //     setEpotch1H(data.data.forecast.forecastday[0].hour[i].temp_f);
        //     setEpotch2H(data.data.forecast.forecastday[0].hour[i + 1].temp_f);
        //   }
        // }
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
    <div className="currenttemp">
            <b>Current Hour</b>
            {temp} °F
          </div>
          <div className="nexthour">
            <b>Next Hour</b>
            {epotch1h} °F
          </div>
          <div className="secondhour">
            <b>Next 2nd Hour</b>
            {epotch2h} °F
          </div>
          {hours.map((hour) => (
            <div className="list-group">
              {!!hour.now && "Now"}
              {hour.formatted_time}
              {hour.temp_f}
            </div>
          ))}
    </div>
    </div>
  );
}

export default App;
