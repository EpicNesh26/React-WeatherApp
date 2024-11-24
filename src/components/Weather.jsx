import React, { useEffect, useReducer, useRef, useState } from 'react'


const Weather = () => {

    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState(false);

    const search = async (city)=>{
        if(city === ""){
            alert("Enter City Name")
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

            const reponse = await fetch(url);
            const data = await reponse.json();
            console.log(data)
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location:data.name
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        search("Regina");
    }, [])
    
    
    return (
        <div className='weather self-center p-10 font-inter rounded-lg  m-auto bg-custom-gradient flex flex-col items-center'>
            <div className="search-bar flex flex-col gap-10">

                <div className='search flex items-center'>
                    <input ref={inputRef} type="text" placeholder='Search' className='h-8 p-2 border-0 rounded-[40px] outline-none ' />
                    <div className="search rounded-full p-2 scale-150 cursor-pointer" onClick={()=>search(inputRef.current.value)}>🔎</div>
                </div>

                {weatherData?<>
                
                
                <div className="info flex flex-col  justify-center items-center">

                    

                    <p className='temperature text-[#fff] font-bold text-[50px]'>{weatherData.temperature}°C </p>
                    <p className="location text-white font-bold text-[20px]">{weatherData.location}</p>
                </div>

                <div className="moreinfo justify-normal flex flex-col gap-3">
                    <div className="heading text-white font-bold text-base">More Data: 📊</div>

                    <div className="data flex justify-between">
                    <div className="humidity text-white font-bold text-[14px]">
                        
                        <span className='font-bold text-[16px]'>{weatherData.humidity} % 💧</span>
                    </div>

                    <div className="wind text-white font-bold text-[14px]">
                        
                        <span className='font-bold text-[16px]'>{weatherData.windSpeed} km/h 🍃</span>
                    </div>
                    </div>
                </div>
                </>:<></>}
            </div>


        </div>
    )
}

export default Weather
