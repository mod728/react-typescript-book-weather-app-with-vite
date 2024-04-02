import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form" 
import Results from "./components/Results" 

type ResultsState = {  
    country: string
    cityName: string
    temperature: string
    conditionText: string 
    icon: string
}  

const App = () => {
    const [city, setCity] = useState<string>("")
    const [results, setResults] = useState<ResultsState>({
        country: "",
        cityName: "",
        temperature: "", 
        conditionText: "",
        icon: ""
    })

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()  
        fetch(`https://api.weatherapi.com/v1/current.json?key=xxyyzz&q=${city}&aqi=no`) 
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
            })
    } 

    return (
        <div className="wrapper">  
            <div className="container">
                <Title/>
                <Form setCity={setCity} getWeather={getWeather}/>
                <Results results={results}/>
            </div>
        </div>
    )
}

export default App