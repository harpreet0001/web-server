const request = require('request');

const forcast = (latitude,longitude,callback) => {

    const url = 'http://api.weatherstack.com/forecast?access_key=14ce50c7e8224f749cb6572234a480ea&query='+latitude+','+longitude;

    request({url:url,json:true},(error,response) => {

          if(error) {
              callback('We doesnot connect to weater api',undefined);
          }else if(response.body.error) {
            callback('We doesnot find weater try another',undefined);
          } else {
            callback(undefined,{

                temperature : response.body.current.temperature
           });
          }
    })

}

module.exports = forcast;