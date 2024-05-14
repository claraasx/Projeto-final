import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://sky-scanner3.p.rapidapi.com/get-config',
  headers: {
    'X-RapidAPI-Key': '5cbb8ac269msh54c95c0addee57ap16efcfjsn33f1b7277539',
    'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}