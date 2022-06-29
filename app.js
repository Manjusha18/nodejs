// var nd = require("needle");
//  var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=d3b7bc50f4313fc9d04f957b371c0104&language=en-US&page=2"
//  nd.get(url,(err,response,body)=>{
//      if(err)
//         console.log(err)
//     else
//         var resultss = body.results
//         for(ele in resultss)
//             console.log(resultss[ele].title)
//  })



// var nd = require("needle");

//  for(var i=1 ; i<10 ; i++){
//     var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=d3b7bc50f4313fc9d04f957b371c0104&language=en-US&page=1"
//  nd.get(url,(err,response,body)=>{
//      if(err)
//         console.log(err)
//     else
//         console.log(body)
//  })
//  }



 


// var nd = require("needle");

// for(var i=1 ; i<10 ; i++){
//    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=d3b7bc50f4313fc9d04f957b371c0104&language=en-US&page=1"
// nd.get(url,(err,response,body)=>{
//     if(err)
//        console.log(err)
//    else
//        var results = body.results
//        if(body.results.original_language='hi')
//         for(ele in results)
//             console.log(results[ele].title)
           
       
// })
// }

 


var nd = require("needle");
 var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibWFuanVzaGEzMSIsImEiOiJjbDNvMTN5ODQwaHppM2pwbDliYmgwbGU4In0.gJi0ubsqKYZ-rxOsaFIwZA"
 nd.get(url,(err,response,body)=>{
     if(err)
        console.log(err)
    else
        console.log(JSON.parse(body))
 })


// var nd = require("needle");
//  var url = "http://api.weatherstack.com/current?access_key=c25acbf09b7e1fd3dcd881ed0b83804f&query=New%20York"
//  nd.get(url,(err,response,body)=>{
//      if(err)
//         console.log(err)
//     else
//         console.log(body.current.temperature)
//         console.log(body.location.lat)
//         console.log(body.location.lon)
//          var description = body.current.weather_descriptions
//          for(ele in description){
//              console.log(description[ele])
//          }

//  })