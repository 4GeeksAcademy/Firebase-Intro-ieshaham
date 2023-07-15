import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";




const backendHostUrl= 'https://ieshaham-stunning-space-system-ggrvp5x5ggwcx7p-5001.preview.app.github.dev'
function App() {

  const[name,setName]= useState(0);
  const[temp,setTemp]= useState(0);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${backendHostUrl}/geeks-firebase-72e6d/us-central1/getDayWeather`
        
      );

      const data = await res.json();

      console.log("The res: ", data);
      setTemp(data.data.current.feelslike_c);
      setName(data.data.location.name);
    })();
  }, []);




  return (
    <div className="outer">
    <div className="App">
      <h3>{name}</h3>
      <h1>{temp}</h1>
    </div>
    </div>
  );
}

export default App;
