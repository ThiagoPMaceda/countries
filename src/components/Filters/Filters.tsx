import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useCountries } from '../../hooks/useCountries';

const Filters: React.FC = () => {
	const { data, status } = useCountries();

	console.log(data, status);

	return (
		<div className='flex justify-center pt-8'>
			<form>
				<div className='relative'>
					<span className='absolute inset-y-0 flex items-center pl-8'>
						<button>
							<AiOutlineSearch
								size={20}
								className='text-textPrimary'
							/>
						</button>
					</span>
					<input
						className='shadow appearance-none px-16 py-2 rounded text-textPrimary placeholder-textPrimary focus:outline-none focus:shadow-outline bg-elements'
						id='search-country'
						type='text'
						placeholder='Search for a country...'
					/>
				</div>
			</form>
		</div>
	);
};

export default Filters;
