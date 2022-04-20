import Typography from '@mui/material/Typography'

function Weather ({weather}) {
    
const icon = (weather.weather[0].icon)
const temp = farenheit(weather.main.temp)
  function farenheit (kelvin) {
    return ((kelvin - 273.15) * (9 / 5) + 32).toFixed(1)
  }

  return (
      <Typography>
          The current weather is: {temp}° F<img src={`http://openweathermap.org/img/wn/${icon}.png`} />
      </Typography>
  )
}

export default Weather