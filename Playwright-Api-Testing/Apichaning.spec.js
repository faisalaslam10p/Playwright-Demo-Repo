const {test, expect} = require ('@playwright/test');
const APIuserdata = require('../Constant/Constant.js');
const exp = require('constants');
const bookingdetail = require('../Constant/bookingdetails.json');
var token

test('API should get all the details for booking', async ({ request })=> {
    const response = await request.get(APIuserdata.Baseapiurl+'/booking');
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('API Create a New Boiking user Post Call', async ({ request })=> {
    const response = await request.post(APIuserdata.Baseapiurl+'/booking', {
        data: APIuserdata.Postdata
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responsebody = await response.json();
    expect(responsebody.booking).toHaveProperty("firstname","Jim");
    expect(responsebody.booking).toHaveProperty("lastname","Brown")
    expect(responsebody.booking).toHaveProperty("totalprice",1500);
    expect(responsebody.booking).toHaveProperty("depositpaid",true);
});

test('API should update the Data on Put Call', async ({ request })=> { 
    const response = await request.post(APIuserdata.Baseapiurl+'/auth',{
        data : APIuserdata.Credentials
    });
    console.log(await response.json());
    const responsebody = await response.json();
    token = responsebody.token;
    console.log("Your Token is:" + token);

    //Get Call Before Updating the Data
    const beforeudpate = await request.get(APIuserdata.Baseapiurl+'/booking/1');
    console.log(await beforeudpate.json());
    expect(beforeudpate.ok()).toBeTruthy();
    expect(beforeudpate.status()).toBe(200);

    //Put Call to Update Data
    const updaterequest = await request.put(APIuserdata.Baseapiurl+'/booking/1',{
        headers:{        
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`,
    },
    data : APIuserdata.UpdateData
    });
    console.log(await updaterequest.json());
    expect(updaterequest.ok()).toBeTruthy();
    expect(updaterequest.status()).toBe(200);
    const updatedresponsebody = await updaterequest.json();
    expect(updatedresponsebody).toHaveProperty("firstname","Faisal");
    expect(updatedresponsebody).toHaveProperty("lastname","Zaman")
    expect(updatedresponsebody).toHaveProperty("totalprice",1500);
    expect(updatedresponsebody).toHaveProperty("depositpaid",true);


    const deleterequest = await request.delete(APIuserdata.Baseapiurl+'/booking/1');
    console.log(await deleterequest);

    const verifydelete = await request.get(APIuserdata.Baseapiurl+'/booking/1');
    console.log (await verifydelete.response);
});
