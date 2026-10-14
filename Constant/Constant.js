import {randomUsername} from '../pages/SignupPageClass.js';
import {randomPassword} from '../pages/SignupPageClass.js';

module.exports =  {

    Baseapiurl : 'https://restful-booker.herokuapp.com',
    
    user : {
        username : randomUsername,
        password : randomPassword,

    },

    Postdata :{
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 1500,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    },

    Credentials:{
        "username" : "admin",
        "password" : "password123"
    },
    UpdateData :{
        "firstname" : "Faisal",
        "lastname" : "Aslam",
        "totalprice" : 1500,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Dinner"
    },

 
}