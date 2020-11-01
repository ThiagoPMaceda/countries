import { QueryResult, useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

interface ICountry {
	name: string;
	alpha2Code: string;
}

const fetchCountries = async () => {
	const res = await axios.get<ICountry[]>(
		'https://restcountries.eu/rest/v2/all'
	);
	return res;
};

export const useCountries = (): QueryResult<
	AxiosResponse<ICountry[]>,
	Error
> => {
	return useQuery('countries', fetchCountries);
};
