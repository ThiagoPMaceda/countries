import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCountries = async () => {
	const res = await axios.get('https://restcountries.eu/rest/v2/all');
	return res;
};

export const useCountries = () => {
	return useQuery('countries', fetchCountries);
};
