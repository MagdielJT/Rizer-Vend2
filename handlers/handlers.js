var request = require('request');
var http = require('http');
const NetSuiteOauth = require('netsuite-tba-oauth');

const url = 'https://5102991.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=366&deploy=1';
const method = 'POST';
const consumerKey = '40cf05f1ffeae398214e7b749e9950167034bda66874312f01512b2c8daf871e';
const consumerSecret = 'a9e9a63dbdfc144d9fb26a174cc17ec593e103b4d87262a8b922d6e5cc9a659f';
const tokenId = 'a1d6e58878f23d99a697bd4fd768727cb0dccf798f4a3d81343f29230538360a';
const tokenSecret = '950e7560077161fd34d320d598a6f6bda56d62ed6ce9cdd72ada75313a74bb5c';
const account = '5102991';
        

module.exports =  (req, res) => {
    var store = req.params.store;
    console.log("Store", store);
    
    const oauth = new NetSuiteOauth(url, method, consumerKey, consumerSecret, tokenId, tokenSecret, account);
    // console.log("REQ", req);
    const data = req.body;
    console.log("DATA", data);
    if (!isObject(data.payload)) {
        if(typeof data.payload  == 'string') data.payload = JSON.parse(data.payload);
    }
    const invoice = data.payload.invoice_number;
    const idinvoice = data.payload.invoice_number;
    data.payload.store = store;
    var result = "Data Sended  invoice " + invoice ;
    oauth.post(data).then(response => {
                                        console.log("Response ticket", invoice);
                                        console.log(idinvoice, response);
                                        result = response;
                                    }, reject => console.log(reject));
    console.log("Result" , result);
    res.send(result);

};

const isObject = (value) => {
    return value && typeof value === 'object' && value.constructor === Object;
  };