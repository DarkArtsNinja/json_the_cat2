

const request = require('request');



// const variable = process.argv.slice(2)


const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
  const responseBody = JSON.parse(body)
  // console.log(responseDescription);
  if (error) {
      callback(error, null)
    } else if (responseBody.length > 0) {
      const responseDescription = responseBody[0]['description']

      callback(null, responseDescription);
    } 

    else if (responseBody.length <= 0) {
      callback("data not found", null);
    } 
  });

}




module.exports = { fetchBreedDescription };
