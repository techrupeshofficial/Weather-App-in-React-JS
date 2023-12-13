import './App.css'
import { useState } from "react"
import axios from "axios"
function App() {
  const apiKey = "000f25cafa3f3261de7cef71097f7345"
  const [input , setInput] = useState("")
  const [data , setData] = useState("")

  const getWeatherdetails = (cityName)=>{
    if(!cityName) return
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    axios.get(apiURL).then((res)=>{
      console.log("Response", res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("Error", err)
    })
  }




  const handleInput = (e) =>{
    setInput(e.target.value)
    console.log(e.target.value)
  }



 const handleSearch = () =>{    // this is use for Click the search button
  getWeatherdetails(input)
  setInput("")
 }



 const handleKeyDown = (eve) =>{    // this is use for Enter the search button
  if (eve.key === 'Enter'){
  getWeatherdetails(input)
  setInput("")
  }
 }





  return (
    <>
    <div className="box">
    <h1 className="heading"> Weather App </h1> 
    <div className='inpsubmit'>
    <input  type="text" className="inp" onChange={handleInput} value={input} placeholder='Enter The City Name'   onKeyDown={handleKeyDown}  />
    <button type="button" className="sbtn"  onClick={handleSearch}> Search </button>
    </div> 
   


   {Object.keys(data).length > 0 &&  
   <div className="result">
   <div className='content'>
   <img className="icon" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" />
    <h2 className="city"> {data.name} </h2>
    <h3 className="temp"> Temperature: {((data.main.temp)-273.15).toFixed(2)} °C </h3>
    <h4 className="temp"> Country:  {(data. sys.country)}   </h4>
    <h3 className="temp"> {(data. weather[0].description)}   </h3>
   </div>
   </div>
   }

    </div>
    </>

  )
}

export default App
