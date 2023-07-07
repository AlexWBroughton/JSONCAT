const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error,null);
      return
    }
    const [data] = JSON.parse(body);

    if (!data) {
      callback(null, 'Error Breed Not Found');
      return
    }  

    callback(null, data.description)
  });
  
};

module.exports = { fetchBreedDescription };