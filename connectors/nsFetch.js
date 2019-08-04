const nsrestlet = require('nsrestlet');

// For OAuth (we can do NLAuth too, see documentation):
const accountSettings = {
  accountId: '5102991',
  tokenKey: 'a1d6e58878f23d99a697bd4fd768727cb0dccf798f4a3d81343f29230538360a',
  tokenSecret: '950e7560077161fd34d320d598a6f6bda56d62ed6ce9cdd72ada75313a74bb5c',
  consumerKey: '40cf05f1ffeae398214e7b749e9950167034bda66874312f01512b2c8daf871e',
  consumerSecret: 'a9e9a63dbdfc144d9fb26a174cc17ec593e103b4d87262a8b922d6e5cc9a659f',
};  
const urlSettings = {
  url: 'https://5102991.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=366&deploy=1',
  bdmonlup: '097e6eb1ef4ad73d27689abdf11b86e6',
};

// create a link
const connection = nsrestlet.createLink(accountSettings, urlSettings);

const post = (data) => {
  console.log("DATA", data);
  
  return new Promise((resolve, reject) => {
    connection
      .post(data)
      .then((body) => {
        console.log("Response", body);
        resolve(body);
      })
      .catch((error) => {
        console.log("Error", error);
        reject(error);
      });
      
  });
};

const getRandom = (max, min) => {
  return Math.floor(Math.random() * max) + min;
}

module.exports = {
  post: post,
};
