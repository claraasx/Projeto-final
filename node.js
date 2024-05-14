const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix',
  params: {
    origins: '40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853',
    destinations: '40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853'
  },
  headers: {
    'X-RapidAPI-Key': '5cbb8ac269msh54c95c0addee57ap16efcfjsn33f1b7277539',
    'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}