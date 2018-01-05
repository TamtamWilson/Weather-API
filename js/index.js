// Loading
 var load;
 function myFunction() {
     load = setTimeout(showPage, 2000);
 }

function showPage() {
  document.getElementById("loader").style.display = "none";
   document.getElementById("myDiv").style.display = "block";
  }




// Date & Time

$(document).ready(function() {
  
  //   Get Location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude,
        // Added fixed to not have the additional digits at the end
        long = position.coords.longitude.toFixed(7),
        api =
          "https://fcc-weather-api.glitch.me/api/current?lat=" +
          lat +
          "&lon=" +
          long;

      //Get Json data and insert it into Html
      $.getJSON(api, function(data) {
        
        
        var myVar = setInterval(myTimer, 1000); 
        function myTimer() {
          var t = new Date();
          var time = t.toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit"
            // second: "2-digit"
          });
           var d= new Date();
          $("#date").html(d.toDateString());
          $("#time").html(time);
        }
        cond = data.weather[0].main;

        // Format Json Unix Time to get Sunrise
        var r = new Date(data.sys.sunrise * 1000);
        hours = r.getHours();
        minutes = "0" + r.getMinutes();
        rise = hours + ":" + minutes.substr(-2);
        // Format Json Unix Time to get Sunset
        s = new Date(data.sys.sunset * 1000);

        hs = s.getHours() + 1;
        h = hs - 12;

        m = "0" + s.getMinutes();
        set = h + ":" + m.substr(-2);
        // Temperature

        tempF = Math.round(data.main.temp * 9 / 5) + 32;
        tempC = Math.round(data.main.temp);
        tempHf = Math.round(data.main.temp_max * 9 / 5) + 32;
        tempLf = Math.round(data.main.temp_min * 9 / 5) + 32;
        tempHc = Math.round(data.main.temp_max);
         tempLc = Math.round(data.main.temp_min);
        

        //         Wind
        mph = Math.round(data.wind.speed * 2.2369);
        mps = Math.round(data.wind.speed * 18 / 5);


        $("#city").html(data.name);
        $("#country").html("," + "&nbsp" + data.sys.country);

        $("#tempF").html(tempF + "&nbsp" + "&degF");
        $("#tempC").html(tempC + "&nbsp" + "&degC");
        $("#tempHf").html(tempHf + "&nbsp"  + "&degF" + "&nbsp");
        $("#tempLf").html(tempLf + "&nbsp" + "&degF");
        $("#tempHc").html(tempHc +"&nbsp" + "&degC");
        $("#tempLc").html(tempLc +"&nbsp" + "&degC");
         $("#wind").html( mph + "&nbsp" + "MPH");
        $("#wind2").html( mps + "&nbsp" + "km/h");
         $("#cond").html(cond);
        $("#wIcon").html(
          "<img src='" + data.weather[0].icon + "' alt='WIcon" + "' />"
        );
        $("#humidity").html("&nbsp" + data.main.humidity + "%  " );
       
        $("#sunRise").html(rise + "&nbsp" + "AM" + "&nbsp");
        $("#sunSet").html("&nbsp" + set + "&nbsp" + "PM" + "&nbsp");
         
        
        
//         Toggle F and C
        $("button").click(function() {
          $("#tempF").toggle();
          $("#tempC").toggle();
           $("#tempHf").toggle();
          $("#tempLf").toggle();
          $("#tempHc").toggle();
          $("#tempLc").toggle();
          $("#wind").toggle();
           $("#wind2").toggle();
          
        });
       
       
        
        
        //    Change Background according to Condition
         
    
       currentTime = Math.floor((new Date()).getTime()/1000); 
       day = (data.sys.sunrise);
        night = (data.sys.sunset);
    if (day < currentTime && currentTime < night){
       
        switch (cond) {
          case "Clear":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_58/v1512480139/Weather%20Project/autumn-sunshine-2916763_1920.jpg" )'
            );
            break;
          case "Clouds":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_40/v1512752004/Weather%20Project/field-2939616_1920.jpg")'
            );
            break;
          case "Rain":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512479104/Weather%20Project/rain-122691_1920.jpg")'
            );
            break;
          case "Thunderstorm":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512877272/Weather%20Project/DayStorm.jpg")'
            );
            break;
          case "Snow":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512479105/Weather%20Project/horse-419743_1920.jpg")'
            );
            break;
          case "Fog":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/v1512481530/Weather%20Project/fog-2736806_1920.jpg")'
            );
            break;
          case "Mist":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/v1512482258/Weather%20Project/forest-1031022_1920.jpg")'
            );
            break;
          default:
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/v1511794743/Weather%20Project/fall-autumn-red-season.jpg")'
            );
        } 
    } 
        else{
          switch (cond) {
          case "Clear":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_71/v1512872968/Weather%20Project/ClearNIght.jpg")'
            );
            break;
          case "Clouds":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_77/v1512872439/Weather%20Project/good-night-2904747_1920.jpg")'
            );
            break;
            case "Rain":
              
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_60/v1512874163/Weather%20Project/nightRain.jpg")'
            );
            break;
          case "Thunderstorm":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512410505/Weather%20Project/thunderstorm.jpg")'
            );
            break;
          case "Snow":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_50/v1512871769/Weather%20Project/night-2798612_1920.jpg")'
            );
            break;
          case "Fog":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512876977/Weather%20Project/nightFog.jpg")'
            );
            break;
          case "Mist":
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512876977/Weather%20Project/nightFog.jpg")'
            );
            break;
          default:
            $("body").css(
              "background-image",
              'url("https://res.cloudinary.com/tamtamwilson/image/upload/o_70/v1512876160/Weather%20Project/moon.jpg")'
            );
        } 
        }
         
     }
      );
    });
  }
  else{
    alert("Your location cannot be detected");
  }
});