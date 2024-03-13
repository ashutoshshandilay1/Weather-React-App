import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({ info }) {
  const intit_url =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";

  const hot =
    "https://images.unsplash.com/photo-1675695759698-5aa675b7f972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const cold =
    "https://images.unsplash.com/photo-1610215037828-8c1c83d560af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const rainy =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxyYWlueSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="infobox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity > 80 ? rainy : info.temp > 15 ? hot : cold}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h4>
                {" "}
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}</div>
                <div>Pressure = {info.pressure}</div>
                <div>Minimum Temperature = {info.tempMin}&deg;C</div>
                <div>Maximum Temperature = {info.tempMax}&deg;C</div>
                <div>Wind Direction = {info.windDirection}</div>
                <div>Wind Speed = {info.windSpeed}</div>
                <div>Weather Condition = {info.weather}</div>
              </h4>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
