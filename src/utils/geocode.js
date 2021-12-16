const request = require('request');

const geocode = (address,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGFwcHlzaW5naCIsImEiOiJja3d0MHpxenExYnc0MnBwM2tyMmhneXNiIn0.1KhORFxc_NzqldV5JtfM7Q';
    request({url:url,json:true},(error,response) => {
           console.log(response);
         if(error) {
             callback('we not able to connect to locarion api.',undefined);
         } else if(response.body.features.length == 0) {
             callback('we not able to get location try another',undefined);
         }
         else {
            callback(undefined,{

                location  : response.body.features[0].place_name,
                latitude  : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0] 
             });
         }
         
    });
}

module.exports = geocode;